<!DOCTYPE html>
<html lang="en">
<head>
    <script src = "./dom.js"></script>
    <style>
        .conteiner{
            height: 600px;
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .row{
            width: 100%;
            height: 200px;
            background-color: white;
            display: flex;
            flex-direction: space-around;
            align-items: center;
        }

        .item{
            width: 200px;
            height: 200px;
            border-radius: 30%;
            background-color: red;
        }
    </style>

</head>
<body>
    <div class="conteiner">
        <div class="row">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
    <audio controls>
        <source src="./NBSPLV_Downpour_Slowed.mp3" type="audio/mpeg">
      </audio>      
</body>
</html>
