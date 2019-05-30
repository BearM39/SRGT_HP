var HOME_PATH = "./home.html";
      var RESULTS_PATH = "./results.html";
      var TEAM_DRIVER_PATH = "teamAndDriver.html";

      function changeHtml(path, idName){
      $.ajax({
          url　: path,
          dataType : 'html',
          success　: function(data){
              $(idName).html(data);
          },
          error: function(data){
              $(idName).html(data);
          }
      });
    }

    $(window).on('load',function(){
      changeHtml(HOME_PATH, '#content');
      $(".carousel-control-next").click();
    });

    $(document).on('click', '#btnHome', function(){
      changeHtml(HOME_PATH, '#content');
    });

    $(document).on('click', '#btnResults', function(){
      changeHtml(RESULTS_PATH, '#content');
      //init_results();
    });

    $(document).on('click', '#btnTeamAndDriver', function(){
      changeHtml(TEAM_DRIVER_PATH, '#content');
    });

    $(document).on('click', '#teamRnk', function(){
      var obj = document.getElementById('teamRnk');

      if (obj.classList.contains("disable")){
        obj.classList.remove('disable');
      };

      obj = document.getElementById('driverRnk');

      if (!obj.classList.contains('disable')){
        obj.classList.add('disable');
      };
      
      $('#tblDriverRnk').css('display', 'none');
      $('#tblTeamRnk').css('display', 'block');

    });

    // $(document).on('click', '#driverRnk', function(){
    //   var obj = document.getElementById('driverRnk');

    //   if (obj.classList.contains("disable")){
    //     obj.classList.remove('disable');
    //   };

    //   obj = document.getElementById('teamRnk');

    //   if (!obj.classList.contains('disable')){
    //     obj.classList.add('disable');
    //   };
      
    //   $('#tblTeamRnk').css('display', 'none');
    //   $('#tblDriverRnk').css('display', 'block');

    // });

    $(document).on('click', '#driverRnk', function(){
      init_results();
    });

    var init_results = function(){
      var obj = document.getElementById('driverRnk');

      if (obj.classList.contains("disable")){
        obj.classList.remove('disable');
      };

      obj = document.getElementById('teamRnk');

      if (!obj.classList.contains('disable')){
        obj.classList.add('disable');
      };
      
      $('#tblTeamRnk').css('display', 'none');
      $('#tblDriverRnk').css('display', 'block');
    };

    $(document).on('click', '#rd1', function(){
      changeHtml('./rd1Result.html', '#result-body');
    });



    