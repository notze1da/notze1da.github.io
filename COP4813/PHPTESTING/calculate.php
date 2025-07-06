<!DOCTYPE html>
<html>
<head>
    <title>DDR Reading Speed Result</title>
</head>
<body>

        
    <h1>DDR Reading Speed Result </h1>

    <p><strong>Formula:</strong> Reading Speed = BPM × Multiplier</p>

    <?php
    if (isset($_POST['bpm']) && isset($_POST['multiplier'])) {
        $bpm = $_POST['bpm'];
        $multiplier = $_POST['multiplier'];

        if (is_numeric($bpm) && is_numeric($multiplier)) {
            $readingSpeed = $bpm * $multiplier;
            echo "<p>With a BPM of <strong>$bpm</strong> and a multiplier of <strong>$multiplier</strong>,</p>";
            echo "<p><strong>Reading Speed = $bpm × $multiplier = $readingSpeed</strong></p>";
        } else {
            echo "<p style='color:red;'>Error: Both BPM and Multiplier must be numeric.</p>";
        }
    } else {
        echo "<p style='color:red;'><strong>Error:</strong> Please enter both BPM and Multiplier.</p>";
    }
    ?>

    <br><a href="index.php">Calculate again</a>
</body>
</html>
