<!DOCTYPE html> 
<html>    
     <head>      
        
     </head>     
     <body>
        <form>
            <form action="/login.php" method="post">
                <label for="login">Login:</label> 
                <input type="text" id="login" name="login"><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"><br><br>
                <input type="submit" value="Sumbit">
            </form>
            
            <form>
         Gender:<br />
         <input type="checkbox" id="male" value="male" />
         <label for="male">Male</label> <br />
         <input type="checkbox" id="famale" value="famale" />
         <label for="famale">Famale</label> <br />
        </form>

        <form>
        age:<br />
        <input type="checkbox" id="minor" value="minor" />
        <label for="minor">Minor</label> <br />
        <input type="checkbox" id="adult" value="adult" />
        <label for="adult">Adult</label> <br />
        </form>

        <form>
            Hobby:
            <input type="checkbox" id="sport" value="sport" />
            <label for="sport">Sport</label> <br />
            <input type="checkbox" id="science" value="science" />
            <label for="science">Science</label> <br />
            <input type="checkbox" id="natureprotection" value="natureprotection" />
            <label for="natureprotection">Natureprotection</label> <br />
            <input type="checkbox" id="other" value="other" />
            <label for="other">Other</label> <br />
        </form>

        <form>
            Country:
            <select name="country" id="register_country" style="width: 160px">
                <option value="armenia">Armenia</option> <br />
                <option value="russia">Russia</option> <br />
                <option value="england">England</option> <br />
                <option value="china">China</option> <br />
            </select>
        </form>

        <form>
        Language:
            <select name="language" id="register_language" style="width: 160px">
                <option value="armenian">Armenian</option> <br />
                <option value="russian">Russian</option> <br />
                <option value="english">English</option> <br />
                <option value="chinan">Chinan</option> <br />
            </select>
        </form>

        <form>
            Groups:
            <select>
                <optgroup label="Group 1">
                    <option>Sport</option>
                </optgroup>
                <optgroup label="Group 2">
                    <option>Science</option>
                </optgroup>
                <optgroup label="Group 3">
                    <option>Natureprotection</option>
                </optgroup>
                <optgroup label="Group 4">
                    <option>Other</option>
                </optgroup>
            </select>
        </form>

        <form>
            <fieldset>
                <legend>What do you want to become</legend>
                <input type="radio" id="teacher" name="job">
                <label for="teacher">Teacher</label> <br />
                <input type="radio" id="businessman" name="job">
                <label for="businessman">Businessman</label> <br />
                <input type="radio" id="developer" name="job">
                <label for="developer">Developer</label> <br />
            </fieldset>
        </form>
     </body> 
     </html>
