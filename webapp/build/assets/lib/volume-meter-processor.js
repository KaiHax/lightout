const SMOOTHING_FACTOR = 0.8;
const MINIMUM_VALUE = 0.00001;
const sampleRate = 48000;
class VolumeMeterProcessor extends AudioWorkletProcessor {
  _volume;
  _updateIntervalInMS;
  _nextUpdateFrame;
  _decibels;

  _streamPort;
  constructor() {
    super();
    this._volume = 0;
    this._decibels = 0;
    //this._updateIntervalInMS = 25;
    this._updateIntervalInMS = 400;
    this._nextUpdateFrame = this._updateIntervalInMS;
    // this.port.onmessage = event => {
    //   console.log('-------VolumeMeterProcessor=onmessage------');
    //   console.log(event);
    //   if (event.data.updateIntervalInMS) {
    //     this._updateIntervalInMS = event.data.updateIntervalInMS;
    //   }
    // }
  }

  static get parameterDescriptors() {
    return [
      {
        name: "updateIntervals",
        defaultValue: 300,
        minValue: 3,
        maxValue: 1000,
        automationRate: "a-rate",
      },
    ];
  }

  intervalInFrames(intervals) {
    //return this._updateIntervalInMS / 1000 * sampleRate;
    return (intervals / 1000) * sampleRate;
  }

  process(inputs, outputs, parameters) {
    // console.log(parameters);
    // console.log(parameters['updateIntervals']);

    let intervals = parameters["updateIntervals"][0];
    //console.log(intervals);

    const input = inputs[0];

    // Note that the input will be down-mixed to mono; however, if no inputs are
    // connected then zero channels will be passed in.
    if (input.length > 0) {
      const samples = input[0];
      let sum = 0;
      let rms = 0;
      let max = 0;
      // Calculated the squared-sum.
      for (let i = 0; i < samples.length; ++i) {
        // sum += samples[i] * samples[i];
        max = max >= Math.abs(samples[i]) ? max : Math.abs(samples[i]);
      }

      // Calculate the RMS level and update the volume.
      // rms = Math.sqrt(sum / samples.length);
      // this._volume = Math.max(rms, this._volume * SMOOTHING_FACTOR);
      //decibel_level = 20 * log10( gain.value );
      //gain.value = Math.pow(10, (decibel_level / 20));

      this._decibels = 28 * Math.log10(max);
      // Update and sync the volume property with the main thread.
      this._nextUpdateFrame -= samples.length;
      if (this._nextUpdateFrame < 0) {
        this._nextUpdateFrame += this.intervalInFrames(intervals);
        //console.log(this);
        //this.port.postMessage({ volume: this._volume, decibels: this._decibels });
        this.port.postMessage({ decibels: this._decibels });
      }
    }
    return true;
  }
}

registerProcessor("volume-meter-processor", VolumeMeterProcessor);
