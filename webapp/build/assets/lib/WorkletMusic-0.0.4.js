function uint8ToFloat32(uint8) {
  let buffer = uint8.buffer;
  let dv = new DataView(buffer);
  let result = [];
  for (let i = 0; i < buffer.byteLength; i += 2) {
    let tmp = dv.getInt16(i, true);
    tmp = tmp > 0 ? tmp / 0x7fff : tmp / 0x8000;
    tmp = Math.min(1, Math.max(-1, tmp));
    result.push(tmp);
  }
  return result;
}
class MusicBufferPlayProcessor extends AudioWorkletProcessor {
  constructor(...args) {
    super(...args);
    this.buffer = [];
    this.active = false; // 保持内存中有 1 秒数据, 防止进程卡顿导致声音卡顿
    this.port.onmessage = ({ data }) => {
      this.buffer.push(...uint8ToFloat32(new Uint8Array(data)));
      // console.log(`[musicbuffer-play push] buffer length:${this.buffer.length}, sampleRate:${sampleRate}`)
      // 防止内存堆积, 内存超出 3 秒直接舍去保留 1 秒
      if (this.buffer.length > sampleRate * 2) {
        this.buffer.splice(0, this.buffer.length - sampleRate / 20);
      }
    };
  }

  process(inputs, outputs, parameters) {
    // console.log('musicbuffer-play', this.buffer.length)
    // channelLeft.length 128
    let output = outputs[0];
    let channelLeft = output[0];
    let channelRight = output[1];
    if (this.active === false && this.buffer.length > sampleRate / 20) {
      this.active = true;
      // console.debug(`'[MusicBufferPlayProcessor] resume', currentTime:${currentTime}, bufferLength: ${this.buffer.length}`)
      this.port.postMessage(
        `[MusicBufferPlayProcessor] resume, currentTime:${currentTime}, bufferLength: ${this.buffer.length}`
      );
    }
    if (this.active === true && this.buffer.length < channelLeft.length * 2) {
      this.active = false;
      // console.debug(`[MusicBufferPlayProcessor] pause, currentTime:${currentTime}, bufferLength: ${this.buffer.length}`)
      this.port.postMessage(
        `[MusicBufferPlayProcessor] pause, currentTime:${currentTime}, bufferLength: ${this.buffer.length}`
      );
    }
    if (!this.active) {
      // console.debug('[MusicBufferPlayProcessor] return')
      return true;
    }
    let buffer = this.buffer.splice(0, channelLeft.length * 2);
    let lb = [];
    let rb = [];
    for (let i = 0; i < buffer.length; i++) {
      i % 2 == 0 ? lb.push(buffer[i]) : rb.push(buffer[i]);
    }
    channelLeft.set(lb);
    channelRight.set(rb);
    return true;
  }
}

registerProcessor("musicbuffer-play-processor", MusicBufferPlayProcessor);
