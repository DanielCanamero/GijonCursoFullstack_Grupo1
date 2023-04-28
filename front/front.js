async function getUsers(done) {
	try {
	  const response = await fetch('http://localhost:3000/users');
	  const data = await response.json();
	  console.log(data);
	  data.forEach(user => {
		const follow = document.createRange().createContextualFragment(`
		<div class="overflow-hidden">
		<div class="me-2">
			<a href="#"><img class="rounded-circle" src="${user.foto}" height="50" alt=""></img></a>
		  </div>
			<a class="h6 mb-0" href="#!">${user.nombres} ${user.apellidos}</a>
			<p class="mb-0 small text-truncate">${user.username}</p>
		</div>
		<button type="button" class="btn btn-primary btn-sm active mt-1" data-toggle="button" aria-pressed="true" autocomplete="off">
  			Agregar
		</button>
		`);
		const main = document.querySelector("seguimientos");
		main.append(follow);
	  });
	  done();
	} catch (err) {
	  console.log(err);
	}
  }
  
  getUsers(() => {
	console.log('Datos de usuario cargados');
  });