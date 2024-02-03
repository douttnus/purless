<script>
	import Guardar from '../../lib/storage/Guardar.svelte'
</script>

<main>
	<div class="mt-10 md:mt-40 pl-4 pr-4 w-full" style="padding-bottom: 10.765rem;">
		<div class="flex justify-center mb-8">
			<nav>
				<ul class="flex text-center align-items gap-4">
					<li><a href="/" class="transition ease-in-out duration-300 hover:text-red-800">Inicio</a></li>
					<li><a href="/privacidad" class="transition ease-in-out duration-300 hover:text-red-800">Privacidad</a></li>
				</ul>
			</nav>
		</div>
		<h1 class="font-workbench text-4xl text-center md:text-5xl">GESTIONAR CONTRASEÑAS</h1>
		<p class="font-heebo mt-2 w-96 text-center mx-auto">
			Cambia, añade o elimina las contraseñas que quieras.
			Usted controla al 100% su privacidad.
		</p>
		<Guardar />
	</div>
</main>