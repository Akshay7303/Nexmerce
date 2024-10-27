<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexmerce</title>
    <link rel="stylesheet" href="/CSS/style.css">
    <script type="module" src="/JS/login.js" defer></script>
</head>
<body>
    <div class="box">
    </div>
    <div class="box1">
        <div class="login">
        <h4>Continue your Business</h4>
        <h3>Sign In to Nexmerce</h3>
        <fieldset class="inputfield">
            <Legend>E-Mail</Legend>
            <input type="text" required>
        </fieldset>

        <fieldset class="inputfield">
            <Legend>Password</Legend>
            <input type="password" required><br><br>
            <a href="https://nexmerce-e79be.firebaseapp.com/__/auth/action?mode=action&oobCode=code">Forgot Password?</a>
        </fieldset>
        
        <br>
        <br>
        <Button id="submit_1">Sign In</Button>
        <br>
        <div class="links"><br>
            Don't have an account?<a href="register.php">SIGN UP</a>
        </div>
    </div>
    
</body>
</html>