var HOME_PATH = "./home.html";
      var RESULTS_PATH = "./results.html";
      var TEAM_DRIVER_PATH = "teamAndDriver.html";

      function changeHtml(path){
      $.ajax({
          url　: path,
          dataType : 'html',
          success　: function(data){
              $('#content').html(data);
          },
          error: function(data){
              $('#content').html(data);
          }
      });
    }

    $(window).on('load',function(){
      changeHtml(HOME_PATH);
      $(".carousel-control-next").click();
    });

    $(document).on('click', '#btnHome', function(){
      changeHtml(HOME_PATH);
    });

    $(document).on('click', '#btnResults', function(){
      changeHtml(RESULTS_PATH);
    });

    $(document).on('click', '#btnTeamAndDriver', function(){
      changeHtml(TEAM_DRIVER_PATH);
    });



    