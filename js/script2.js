function validation()
{
	var correct_way =/^[A-Za-z]+$/;
	var user = document.getElementById('user').value;
	var age = document.getElementById('age').value;
	var email = document.getElementById('email').value;
	var mobileno = document.getElementById('mobileno').value;
	var dob = document.getElementById('dob').value;
		if (user == "")
		{
			document.getElementById('users').innerHTML="=> fill your name ";
			return false;
		}
		if (user.match(correct_way))
			true;
			else
			{
				document.getElementById('users').innerHTML="=> alphabets only allowed";
				return false;
			}
		/*if (!isNaN(user))
		{
			document.getElementById('users').innerHTML="** user must write only alphabets **";
			return false;
		}*/

		if (age == "")
		{
			document.getElementById('ages').innerHTML="=>fill your age ";
			return false;
		}
		if (isNaN(age) || age<0 ||age>150)
		{
		    document.getElementById('ages').innerHTML="=> age should be a no btw 0 and 150 ";
		    return false;
		}

		if (email == "")
		{
			document.getElementById('emails').innerHTML="=> fill your MailID ";
			//return false;
		}
		if (email.indexOf('@') <= 0 )
		{
			document.getElementById('emails').innerHTML="=> @ invalid position ";
			//return false;
		}
		if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
		{
			document.getElementById('emails').innerHTML="=>  . invalid position ";
			//return false;
		}
		if (mobileno == "")
		{
			document.getElementById('mobilenos').innerHTML="=> fill your Mobileno ";
			return false;
		}
		if (isNaN(mobileno))
		{
			document.getElementById('mobilenos').innerHTML=" fill only digits ";
			return false;
		}
		if (mobileno.length!=10)
		{
			document.getElementById('mobilenos').innerHTML=" mobileno shld be 10 nos";
			return false;
		}

		if (dob == "")
		{
			document.getElementById('dobs').innerHTML="=>fill your DOB ";
			return false;
		}

}
