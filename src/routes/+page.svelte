<script>
	import Generador from '../lib/generator/Generador.svelte'
</script>

<main class="text-center mt-32 md:mt-64 pl-4 pr-4">
	<div class="flex justify-center mb-8">
		<nav>
			<ul class="flex text-center align-items gap-4">
				<li><a href="/privacidad" class="transition ease-in-out duration-300 hover:text-red-800">Privacidad</a></li>
				<li><a href="/almacen" class="transition ease-in-out duration-300 hover:text-red-800">Contraseñas</a></li>
			</ul>
		</nav>
	</div>
	<div>
		<h1 class="font-workbench text-5xl">PURLESS GENERADOR</h1>
		<p class="font-heebo mt-2 text-sm">Purless es un generador y gestor de contraseñas gratuito <br> para tus redes sociales, aplicaciones financieras, juegos, etc.</p>
		<Generador />
	</div>
</main>
