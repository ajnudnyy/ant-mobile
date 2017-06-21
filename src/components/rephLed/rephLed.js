import React from 'react'

class rephLed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockClassName: "clock c" + props.numw
    };

    this.updateLed0 = this.updateLed0.bind(this);
    this.dig_to_led = this.dig_to_led.bind(this);
  }

  var conf = {
    id: "led1",
    type: "random",
    length: 7,
    color: "#af0",
    bgcolor: "#101a10",
    size: 10,
    rounded: 6
  }

  var r, led, timer, new_date,
    font1 = [" 000    0    000   000     0  00000   00  00000  000   000             ", "0   0  00   0   0 0   0   00  0      0        0 0   0 0   0            ", "0   0   0       0     0  0 0  0     0         0 0   0 0   0   0        ", "0   0   0    000   000  0  0  0000  0000     0   000   0000            ", "0   0   0   0         0 00000     0 0   0   0   0   0     0            ", "0   0   0   0     0   0    0  0   0 0   0  0    0   0    0    0        ", " 000   000  00000  000     0   000   000  0      000   00              "],
    font2 = [" 000    0    000  00000    0  00000   00  00000  000   000             ", "0   0  00   0   0    0    00  0      0        0 0   0 0   0            ", "0  00   0       0   0    0 0  0000  0        0  0   0 0   0   0        ", "0 0 0   0     00     0  0  0      0 0000    0    000   0000            ", "00  0   0    0        0 00000     0 0   0   0   0   0     0            ", "0   0   0   0     0   0    0  0   0 0   0   0   0   0    0    0        ", " 000   000  00000  000     0   000   000    0    000   00              "],
    font3 = ["00000     0 00000 00000 0   0 00000 00000 00000 00000 00000            ", "0   0     0     0     0 0   0 0     0         0 0   0 0   0   0        ", "0   0     0     0     0 0   0 0     0         0 0   0 0   0            ", "0   0     0 00000 00000 00000 00000 00000     0 00000 00000            ", "0   0     0 0         0     0     0 0   0     0 0   0     0            ", "0   0     0 0         0     0     0 0   0     0 0   0     0   0        ", "00000     0 00000 00000     0 00000 00000     0 00000 00000            "],
    h_w = 5,
    m_d = 0,
    m_h = 0,
    m_m = 0,
    m_s = 0,
    time_rem, razd, dig = [],
    d, i, start, rand_num, num;
  var type = conf.type == undefined ? "time" : conf.type,
    color = "#000",
    bgcolor = "#000",
    rounded = conf.rounded == undefined ? 1 : conf.rounded,
    pix_between = 1,
    n_length = conf.length == undefined ? 8 : conf.length;

  componentDidMount() {
    r = Raphael(conf.id, n_length * 6 * (h_w + pix_between) - (h_w + 2 * pix_between), 7 * (h_w + pix_between) - pix_between);
    for (i = 0; i < n_length * 6; i++) {
      dig[i] = [];
      for (var y = 0; y < 7; y++) {
        dig[i][y] = r.rect(i * (h_w + pix_between), y * (h_w + pix_between), h_w, h_w, rounded).attr({
          "fill": bgcolor,
          "stroke": null
        })
      }
    }
  }



  render() {
    return (
      <div id="led1" class="autosize" style="background:#333"></div>
    );
  }
}

export default rephLed