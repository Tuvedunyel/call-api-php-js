<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test PHP => JS</title>
</head>
<body>
    <?php
        $curl = curl_init('https://remotive.io/api/remote-jobs?limit=10');
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec($curl);

        if ($data === false) {
            var_dump(curl_error($curl));
        } else {

        }
        curl_close($curl);
    ?>
</body>
</html>