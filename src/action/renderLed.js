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

export function updateLed0() {
  rand_num = ("0,9999999").split(",");
  num = "" + parseInt(parseInt(rand_num[0]) + Math.random() * (parseInt(rand_num[1]) - parseInt(rand_num[0])));
  while (String(num).length < n_length) {
    num = "0" + num;
  }
  dig_to_led(num);
}

export function dig_to_led(num) {
  start = new Date();
  razd = 0;
  for (var l = 0; l < num.length; l++) {
    num.charAt(l) == ":" ? razd = 10 : (num.charAt(l) == " " ? razd = 11 : razd = num.charAt(l));
    for (i = 0; i < 6; i++) {
      for (var y = 0; y < 7; y++) {
        if (led[y].charAt(razd * 6 + i) == "0" && dig[l * 6 + i][y].attrs.fill == bgcolor) {
          dig[l * 6 + i][y].animate({
            "fill": color
          }, 300);
        } else if (led[y].charAt(razd * 6 + i) == " " && dig[l * 6 + i][y].attrs.fill != bgcolor) {
          dig[l * 6 + i][y].animate({
            "fill": bgcolor
          }, 300);
        }
      }
    }
  }
}

export function initLed() {
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