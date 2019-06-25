<?php

echo '<pre>';
var_dump($_REQUEST);
echo '</pre>';

if(isset($_REQUEST['sbBtn'])) {
    echo 'Form auf Server angekommen</br>';
}

?> 
