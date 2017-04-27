(function($) {
  $.fn.mygame = function(options) {
    //Default settings to use when plugin is invoked devoid of any parameters)
    var settings = $.extend({
      gameObject: this.attr('id'),
      blockSize: 100,
      boardSize: null,
      //Ability to add a callback function upon plugin execution
      complete: null,
    }, options);

    var flag_has_merged = [];

    function random_tile() {
      var id = Math.floor(Math.random() * 15) + 0;
      if (Math.random() < 0.5) {
        value = 2;
      } else {
        value = 4;
      }
      for (count = 0; count < 1; count++) {
        if ($('#num' + id).length) {
          random_tile();
        } else {
          $('#' + id).append("<div class='random-tile new_tile' id= num" + id + ">" + value + "</div>");
          $('.random-tile').css({
            "font-size": "500%",
            "text-align": "center",
            "vertical-align": "middle",
            "font-weight": "700",
            "color": "white",
            "line-height": settings.blockSize + "px",
            "width": settings.blockSize + "px",
            "height": settings.blockSize + "px",
            "background-color": "#ffa799",
            "float": "left",
            "border-radius": "5px"
          });
          count = count + 1;
        }
      }
    };

    $(document).keydown(function(e) {
      var key_pressed = (e.which);
      if (key_pressed == 38) {
        flag_move = false;
        var i = 0;
        while (i < 2) {
          for (count = 16; count >= 0; count--) {
            if (($('#num' + count).length)) {
              var count2 = count;
              while (($('#num' + parseInt(count2 - 4)).length) == 0 && (count2 - 4) >= 0) {
                $('#' + parseInt(count2 - 4)).append("<div class='random-tile' id= num" + parseInt(count2 - 4) + ">" + $('#num' + count2).text() + "</div>");
                $('#num' + count2).remove();
                count2 = count2 - 4;
                flag_move = true;
              }
              if (($('#num' + parseInt(count2 - 4)).text()) == $('#num' + parseInt(count2)).text() && $('#num' + parseInt(count2 - 4)).attr("merged") != "1") {
                $('#num' + parseInt(count2)).remove();
                $('#num' + parseInt(count2 - 4)).html($('#num' + parseInt(count2 - 4)).text() * 2);
                $('#num' + parseInt(count2 - 4)).attr({
                  "merge": "true"
                });
                $('#num' + parseInt(count2 - 4)).attr("merged", 1);
                console.log($('#num' + parseInt(count2 - 4)).attr("merged"));
                console.log('#num' + parseInt(count2 - 4));
              }
            }
          }
          i++;
        }
        if (flag_move == true) {
          random_tile();
        }
      } else if (key_pressed == 40) {
        flag_move = false;
        var i = 0;
        while (i < 2) {
          for (count = 0; count <= 16; count++) {
            if (($('#num' + count).length)) {

              var count2 = count;
              while (($('#num' + parseInt(count2 + 4)).length) == 0 && (count2 + 4) < 16) {
                $('#' + parseInt(count2 + 4)).append("<div class='random-tile' id= num" + parseInt(count2 + 4) + ">" + $('#num' + count2).text() + "</div>");
                $('#num' + count2).remove();
                count2 = count2 + 4;
                flag_move = true;
              }
              if (($('#num' + parseInt(count2 + 4)).text()) == $('#num' + parseInt(count2)).text() && $('#num' + parseInt(count2 + 4)).attr("merged") != 1) {
                $('#num' + parseInt(count2)).remove();
                $('#num' + parseInt(count2 + 4)).html($('#num' + parseInt(count2 + 4)).text() * 2);
                $('#num' + parseInt(count2 + 4)).attr("merged", 1);
              }
            }
          }
          i++;
        }
        if (flag_move == true) {
          random_tile();
        }
      } else if (key_pressed == 37) {
        flag_move = false;
        var i = 0;
        while (i < 2) {
          for (count = 16; count >= 0; count--) {
            if (($('#num' + count).length) && (count % 4) != 0) {
              var count2 = count;
              while (($('#num' + parseInt(count2 - 1)).length) == 0 && count2 != 0 && count2 != 4 && count2 != 8 && count2 != 12) {
                $('#' + parseInt(count2 - 1)).append("<div class='random-tile' id= num" + parseInt(count2 - 1) + ">" + $('#num' + count2).text() + "</div>");
                $('#num' + count2).remove();
                count2 = count2 - 1;
                flag_move = true;
              }
              if (($('#num' + parseInt(count2 - 1)).text()) == $('#num' + parseInt(count2)).text() && $('#num' + parseInt(count2 - 1)).attr("merged") != 1) {
                $('#num' + parseInt(count2)).remove();
                $('#num' + parseInt(count2 - 1)).html($('#num' + parseInt(count2 - 1)).text() * 2).fadeIn();
                $('#num' + parseInt(count2 - 1)).attr("merged", 1);
                // $('#num'+parseInt(count2 - 1)).toggle({ effect: "scale", direction: "horizontal" })
              }
            }
          }
          i++;
        }
        if (flag_move == true) {
          random_tile();
        }
      } else if (key_pressed == 39) {
        flag_move = false;
        var i = 0;
        while (i < 2) {
          for (count = 0; count <= 16; count++) {
            if (($('#num' + count).length) && count != 3 && count != 7 && count != 11 && count != 15) {
              var count2 = count;
              while (($('#num' + parseInt(count2 + 1)).length) == 0 && count2 != 3 && count2 != 7 && count2 != 11 && count2 != 15) {
                $('#' + parseInt(count2 + 1)).append("<div class='random-tile' id= num" + parseInt(count2 + 1) + ">" + $('#num' + count2).text() + "</div>");
                // $('#num'+parseInt(count2 + 1)).attr("merged", $('#num'+parseInt(count2)).attr("merged"));
                $('#num' + count2).remove();
                count2 = count2 + 1;
                flag_move = true;
              }
              if (($('#num' + parseInt(count2 + 1)).text() == $('#num' + parseInt(count2)).text()) && $('#num' + parseInt(count2 + 1)).attr("merged") != 1) {
                $('#num' + parseInt(count2)).remove();
                $('#num' + parseInt(count2 + 1)).html($('#num' + parseInt(count2 + 1)).text() * 2);
                $('#num' + parseInt(count2 + 1)).attr("merged", 1);
              }
            }
          }
          i++;
        }
        if (flag_move == true) {
          random_tile();
        }
      }
      count = 0;
      while (count < 16 && ($('#num' + parseInt(count)).length)) {
        count = count + 1;
      }
      if (count == 16) {
        alert("Game over !");
      }

      $('.random-tile').css({
        "font-size": "500%",
        "font-weight": "700",
        "text-align": "center",
        "vertical-align": "middle",
        "color": "white",
        "line-height": settings.blockSize + "px",
        "width": settings.blockSize + "px",
        "height": settings.blockSize + "px",
        "background-color": "#ffa799",
        "float": "left",
        "border-radius": "5px"
      });
    });

    return this.each(function() {
      settings.boardSize = 4 * settings.blockSize + 50;
      $('#' + settings.gameObject + '').append("<div id= 'board' class= 'main-container'></div>");
      for (count = 0; count < 16; count++) {
        $('#board').append("<div class='square-container' id = " + count + "></div>");
      }

      $('.square-container').css({
        "width": settings.blockSize + "px",
        "height": settings.blockSize + "px",
        "background-color": "lightgrey",
        "margin": "4px 4px 4px 4px",
        "float": "left",
        "border-radius": "5px"
      });

      $('.main-container').css({
        "margin-left": "auto",
        "margin-right": "auto",
        "width": settings.boardSize + "px",
        "height": settings.boardSize + "px",
        "background-color": "white",
        "padding": "5px"
      });

      if ($.isFunction(settings.complete)) {
        settings.complete.call(this);
      }
      random_tile();
      random_tile();
    });
  };
})(jQuery);
