// const canvas = document.getElementById("canvas");
// //const ctx     = canvas.getContext("2d", { alpha: false });
// const ctx    = canvas.getContext("2d");
// ctx.imageSmoothingEnabled = false;

raw_data = `1,1,1,1,1,1,1,,,,,1,,,1,1,1,1,1,1,1
1,,,,,,1,,1,,1,,1,,1,,,,,,1
1,,1,1,1,,1,,,,,,,,1,,1,1,1,,1
1,,1,1,1,,1,,,1,1,,,,1,,1,1,1,,1
1,,1,1,1,,1,,1,,,1,1,,1,,1,1,1,,1
1,,,,,,1,,,1,,1,,,1,,,,,,1
1,1,1,1,1,1,1,,1,,1,,1,,1,1,1,1,1,1,1
,,,,,,,,,1,,,,,,,,,,,
1,,1,,1,,1,,,1,,,1,,,,1,,,1,
,,1,1,1,1,,1,,,,1,,1,,1,,1,1,1,1
1,,,,,1,1,1,1,1,,1,,1,1,1,,1,1,1,1
1,,,1,1,,,,,,,1,1,1,,1,1,,,,1
1,1,,1,1,1,1,,,,1,1,,1,1,1,,,,1,1
,,,,,,,,1,1,,,,,1,,,1,1,,1
1,1,1,1,1,1,1,,,,1,,1,,,,1,1,,1,1
1,,,,,,1,,,,,,,,1,,,,,1,
1,,1,1,1,,1,,1,1,,,1,,1,,1,,,1,1
1,,1,1,1,,1,,,1,1,1,,1,,1,,1,1,1,
1,,1,1,1,,1,,1,1,,1,,1,1,1,,1,1,,1
1,,,,,,1,,,1,1,1,1,1,,1,1,1,,1,
1,1,1,1,1,1,1,,1,,1,1,,1,1,1,,,1,1,1`

raw_overlay_1 = `2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5,4,4,4,4,2,2,2,2,2,2,2,2
5,5,5,5,5,5,2,5,5,4,4,4,4,5,5,5,5,5,5,5,5
4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,6,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5,4,4,4,4,4,4,4,4,4,4,4,4`

raw_overlay_2 = `2,2,2,2,2,2,2,2,5;0,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;1,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;2,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;3,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;4,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;5,4,4,4,4,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,3,3,3,3,3,2,2,2,2,2,2,2,2
2,2,2,2,2,2,2,2,5;6,4,4,4,4,2,2,2,2,2,2,2,2
8;14,8;13,7;12,7;11,7;10,5;9,3,5;8,5;7,4,4,4,4,5;7,5;6,5;5,5;4,5;3,5;2,5;1,5;0
4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4
4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,6,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5;8,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,5;9,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,7;10,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,7;11,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,7;12,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,8;13,4,4,4,4,4,4,4,4,4,4,4,4
2,2,2,2,2,2,2,2,8;14,4,4,4,4,4,4,4,4,4,4,4,4`

raw_overlay_3 = `,,,,,,,,,1,,1,,,,,,,,,
,,,,,,,,1,,1,,1,,,,,,,,
,,,,,,,,,1,,1,,,,,,,,,
,,,,,,,,1,,1,,1,,,,,,,,
,,,,,,,,,1,,1,,,,,,,,,
,,,,,,,,1,,1,,1,,,,,,,,
,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,1,,1,,,,,,,,,
,1,,1,,1,,,1,,1,,1,,1,,1,,1,,1
1,,1,,1,,,1,,1,,1,,1,,1,,1,,1,
,1,,1,,1,,,1,,1,,1,,1,,1,,1,,1
1,,1,,1,,,1,,1,,1,,1,,1,,1,,1,
,1,,1,,1,,,1,,1,,1,,1,,1,,1,,1
,,,,,,,,,1,,1,,1,,1,,1,,1,
,,,,,,,,,,1,,1,,1,,1,,1,,1
,,,,,,,,,1,,1,,1,,1,,1,,1,
,,,,,,,,,,1,,1,,1,,1,,1,,1
,,,,,,,,,1,,1,,1,,1,,1,,1,
,,,,,,,,,,1,,1,,1,,1,,1,,1
,,,,,,,,,1,,1,,1,,1,,1,,1,
,,,,,,,,,,1,,1,,1,,1,,1,,1`

class QR_code_list {
  constructor(qr_code_list) {
    this.qr_code_list = qr_code_list
  }

  update_all_qr_codes() {
    for (let i=0; i < this.qr_code_list.length; i++) {
      this.qr_code_list[i].update()
    }
  }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    /// Use: await sleep(2);
    // Function must be async
}

class AnimatedQRcode {
  constructor (canvas_link, default_qr_code_data_csv, overlay_qr_code_data_csv) {
    this.canvas = canvas_link

    this.qr_code_array_rows = default_qr_code_data_csv.split(/\r?\n/)
    this.overlay_array_rows = overlay_qr_code_data_csv.split(/\r?\n/)

    this.ctx = this.canvas.getContext("2d")
    this.ctx.imageSmoothingEnabled = false

    this.iscurrentlyanimating = false

    for (let y=0; y < this.qr_code_array_rows.length; y++) {
      let qr_code_array_columbs = this.qr_code_array_rows[y].split(",")
      let color = ""

      for (let x=0; x < qr_code_array_columbs.length; x++) {
        if (qr_code_array_columbs[x] == "1") {
          color="black"
        } else {
          color="white"
        }
        //console.log(this.grid_checkbox_id)
        //console.log(document.querySelectorAll(this.grid_checkbox_id))
        this.drawSquare(x,y,color)

      }
    }

  }

  async animate() {
    console.log("Trying to animate!")

    if (this.iscurrentlyanimating != true) {
    this.iscurrentlyanimating = true
    console.log("Started animation!")
      for (let y=0; y < this.qr_code_array_rows.length; y++) {
        let qr_code_array_columbs = this.qr_code_array_rows[y].split(",")
        let color = ""

        for (let x=0; x < qr_code_array_columbs.length; x++) {
          if (qr_code_array_columbs[x] == "1") {
            color="black"
          } else {
            color="white"
          }
          //console.log(this.grid_checkbox_id)
          //console.log(document.querySelectorAll(this.grid_checkbox_id))
          this.drawSquare(x,y,color)

        }
      }

      for (let y=this.overlay_array_rows.length-1; y >= 0; y--) {
        let overlay_array_columbs = this.overlay_array_rows[y].split(",")
        let qr_code_array_columbs = this.qr_code_array_rows[y].split(",")

        for (let x=overlay_array_columbs.length-1; x >= 0; x--) {
          let data = overlay_array_columbs[x]
          let waitTime = 1000 - document.querySelectorAll("#speedslider")[0].value
          waitTime = waitTime + 50
          let color = ""

          let number_value = data
          if (number_value == 1) {
            await sleep(waitTime)

            // Opposite colors so you can see the "F"'s
            if (qr_code_array_columbs[x] == "1") {
              color="white"
            } else {
              color="black"
            }

            // this.drawGrid((x-2),y, "green")
            this.drawText(x,y,color, "F")
            // if() {
            //   this.drawGrid((x+2),y,"white")
            // } else {
            //   this.drawGrid((x+2),y,"black")
            // }
          }


        }
      }

      for (let y=this.overlay_array_rows.length-1; y >= 0; y--) {
        let overlay_array_columbs = this.overlay_array_rows[y].split(",")
        let qr_code_array_columbs = this.qr_code_array_rows[y].split(",")

        for (let x=overlay_array_columbs.length-1; x >= 0; x--) {
          let data = overlay_array_columbs[x]
          let waitTime = 1000 - document.querySelectorAll("#speedslider")[0].value
          waitTime = waitTime + 50
          let color = ""

          let number_value = data
          if (number_value == 1) {
            await sleep(waitTime)

            // Opposite colors so you can see the "F"'s
            if (qr_code_array_columbs[x] == "1") {
              color="white"
            } else {
              color="black"
            }
            this.drawSquare(x,y,color)
          }


        }
      }
    this.iscurrentlyanimating = false
    console.log("Finished animation")
    }

  }

  drawSquare(x, y, color) {
    this.ctx.beginPath();
    this.ctx.rect(x*20, y*20, 20, 20);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  drawText(x, y, color, text) {
    this.ctx.beginPath();
    this.ctx.font = "14px Comic Sans MS";
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "center";
    this.ctx.fillText(text, (x*20 - 10.7 + 20), (y*20 - 5 + 20));
  }

  drawGrid(x,y, color) {

    this.ctx.beginPath();
    this.ctx.lineWidth = "2";
    this.ctx.strokeStyle = color;
    this.ctx.rect(x*20, y*20 , 20, 20);
    this.ctx.stroke();

  }

}

class QRcode {
  constructor (canvas_link, default_qr_code_data_csv, overlay_qr_code_data_csv, checkbox_id_list, grid_checkbox_id) {
    this.canvas = canvas_link

    this.qr_code_array_rows = default_qr_code_data_csv.split(/\r?\n/)
    this.overlay_array_rows = overlay_qr_code_data_csv.split(/\r?\n/)

    this.checkbox_id_list = checkbox_id_list
    this.grid_checkbox_id = grid_checkbox_id

    this.ctx = this.canvas.getContext("2d")
    this.ctx.imageSmoothingEnabled = false

    // This is so cursed its not even funny...
    // Like I'm actaully evil for doing this.
    document.querySelectorAll(grid_checkbox_id)[0].addEventListener('change', function(e) {
      // True evil
      the_list.update_all_qr_codes()
    })

    for (let i=0; i < this.checkbox_id_list.length; i++) {
      document.querySelectorAll(this.checkbox_id_list[i][1])[0].addEventListener('change', function(e) {
        // True evil v2
        the_list.update_all_qr_codes()
      })
    }


    this.update()

  }

  update() {
    for (let y=0; y < this.qr_code_array_rows.length; y++) {
      let qr_code_array_columbs = this.qr_code_array_rows[y].split(",")
      let color = ""

      for (let x=0; x < qr_code_array_columbs.length; x++) {
        if (qr_code_array_columbs[x] == "1") {
          color="black"
        } else {
          color="white"
        }
        //console.log(this.grid_checkbox_id)
        //console.log(document.querySelectorAll(this.grid_checkbox_id))
        let grid_checked = document.querySelectorAll(this.grid_checkbox_id)[0].checked
        this.drawSquare(x,y,color,grid_checked, "gray")

      }
    }

    for (let y=0; y < this.overlay_array_rows.length; y++) {
      let overlay_array_columbs = this.overlay_array_rows[y].split(",")

      for (let x=0; x < overlay_array_columbs.length; x++) {
        let data = overlay_array_columbs[x]

        let color_value  = data.split(";")[0]
        let number_value = data.split(";")[1]

        let grid_checked = document.querySelectorAll(this.grid_checkbox_id)[0].checked
        // checkbox id = [id number, javascript id selector, color]
        for (let i=0; i < this.checkbox_id_list.length; i++) {
          if (this.checkbox_id_list[i][0] == color_value && document.querySelectorAll(this.checkbox_id_list[i][1])[0].checked) {
            this.drawSquare(x,y,this.checkbox_id_list[i][2],grid_checked, "black")

            if(number_value != undefined) {
              // Can't see white on lime
              if( color_value == 7 ) {
                this.drawText(x,y,"black",number_value)
              } else {
                this.drawText(x,y,"white",number_value)
              }
            }

          }
        }


      }
    }
  }

  drawSquare(x, y, color, grid, grid_color) {
    this.ctx.beginPath();
    this.ctx.rect(x*20, y*20, 20, 20);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    if (grid == true) {
      this.ctx.beginPath();
      this.ctx.lineWidth = "1";
      this.ctx.strokeStyle = grid_color;
      this.ctx.rect(x*20, y*20 , 20, 20);
      this.ctx.stroke();
    }
  }

  drawText(x, y, color, text) {
    this.ctx.beginPath();
    this.ctx.font = "14px Comic Sans MS";
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "center";
    this.ctx.fillText(text, (x*20 - 10.7 + 20), (y*20 - 5 + 20));
  }

}

canvas = document.getElementById("canvas");
canvas2 = document.getElementById("canvas2");
canvas3 = document.getElementById("canvas3");

checkbox_id_list_1 = [
  [2, "#camera_alignment", "PaleVioletRed"],
  [3, "#camera_alignment", "orange"],
  [4, "#data", "green"],
  [5, "#formating_data", "blue"],
  [6, "#formating_data", "purple"]
]

checkbox_id_list_2 = [
  [2, "#camera_alignment2", "PaleVioletRed"],
  [3, "#camera_alignment2", "orange"],
  [4, "#data2", "green"],
  [5, "#formating_data2", "blue"],
  [6, "#formating_data2", "purple"],
  [7, "#formating_data2", "Lime"],
  [8, "#formating_data2", "red"]
]

checkbox_id_list_3 = [
  [3, "#camera_alignment3", "orange"],
]

qr_code_1 = new QRcode(canvas, raw_data, raw_overlay_1, checkbox_id_list_1, "#grid")
qr_code_2 = new QRcode(canvas2, raw_data, raw_overlay_2, checkbox_id_list_2, "#grid2")

the_list = new QR_code_list([qr_code_1, qr_code_2])

animatedQRcode_1 = new AnimatedQRcode(canvas3, raw_data, raw_overlay_3)

button = document.getElementById("animationstartbutton");

button.addEventListener('click', function(e) {
  animatedQRcode_1.animate()
})
