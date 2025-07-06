<!DOCTYPE html>
<html>
   $BPMErr = $MULTIErr = $websiteErr = "";
   $bpm = $multi = $website = "";
   
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["bpm"])) {
        $BPMErr = "BPM is required";}
        else {
        $bpm = test_input($_POST["bpm"])};
        }
<head>
    <title>DDR Reading Speed Calculator</title>
</head>
<body>

    <h1>DDR Reading Speed Calculator</h1>

    <p><strong>Formula:</strong> Reading Speed = BPM × Multiplier</p>
    <p>Enter the BPM (Beats Per Minute) and the Speed Multiplier to calculate your DDR Reading Speed.</p>

    <form action="calculate.php" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>>
        
        <label for="bpm">BPM:</label>
        <input type="text" name="bpm" id="bpm" required>
        <span class="error">* <?php echo $nameErr;?></span>
        <br><br>
        <label for="multiplier">Multiplier: </label>
        <input type="text" name="multiplier" id="multiplier" required>
        <span class="error">* <?php echo $MULTIErr;?></span>
        <br><br>

        <input type="submit" value="Calculate Reading Speed">

    
    </form>
</body>
</html>
