<?php
$uName = $_POST['uName'];
$tel = $_POST['tel'];
$state = $_POST['state'];
$city = $_POST['city'];
$address = $_POST['address'];
$house = $_POST['house'];
$pin = $_POST['pin'];

// echo  $uName." ".$state." ".$city." ".$address." ".$house." ".$pin; //! qwe qwe qwe qwe qwe qwe

$size = $_POST['size'];
$qnt = $_POST['qnt'];
$color = $_POST['color'];
$title = $_POST['title'];
$price = $_POST['price'];

// echo implode(" ",$size);
// echo "\n";
// print_r($size);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rajat";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo count($size);
echo "<br/>";

for ($i = 0; $i < count($size); $i++) {
    //  $sql="INSERT INTO pl_tbl (p_id,po_name,po_val)
    //  VALUES ('$id','$data['data']['name_'.$i]','$data['data']['val_'.$i]')";

    $sql = "INSERT INTO orders (uname, tel, ustate, city, uaddress, house, pin, size, qnt, color, title, price)
 VALUES ('$uName', '$tel', '$state', '$city','$address','$house','$pin','$size[$i]','$qnt[$i]','$color[$i]','$title[$i]','$price[$i]')";

    // $result = mysql_query($sql);
    $conn->query($sql);
}

if ($conn->query($sql) === true) {
    echo "New record created successfully";
    header('Location: index.html');
    exit;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
