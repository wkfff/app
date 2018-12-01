<?php
    header("Access-Control-Allow-Origin: *");
    require "inc/dbconn.php";
    $field = $_REQUEST["field"];
    $mark = $_REQUEST["mark"];
    $sql = "select * from index_table where ". $field ." like '%" . $mark . "%'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        echo json_encode($rows);
    }else{
        echo "查询数据失败";
    }
?>