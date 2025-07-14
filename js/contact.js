
 var set = (k, v) => localStorage.setItem(k, v);

var form = document.getElementById('form');

  form.addEventListener('submit', e => {
    e.preventDefault();             

    var firstName = form.firstName.value;
    var lastName  = form.LastName.value;
    var email     = form.Email.value;
    var phone     = form.phone.value;
    var message   = form.text.value;

    set('firstName', firstName);
    set('lastName',  lastName);
    set('email',     email);
    set('phone',     phone);
    set('message',   message);

    console.log({ firstName, lastName, email, phone, message });
    form.reset();
    alert('Message is sent');
  });