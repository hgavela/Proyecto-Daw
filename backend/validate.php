<?php

function validateEmail($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && isset($email)) {
        return true;
    }
    return false;
}

function validatePassword($password) {
    if (strlen($password) >= 8 && isset($password)) {
        return true;
    } else {
        return false;
    }
}

function validateUsername($username) {
    if (isset($username) && strlen($username) > 4) {
        return true;
    } else {
        return false;
    }
}


?>