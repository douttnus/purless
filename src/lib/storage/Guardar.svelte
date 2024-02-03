<script>
import Cambiar from '../modal/Cambiar.svelte';

import { onMount } from 'svelte';
import { writable } from 'svelte/store';

const idStore = writable(0);
const datosStore = writable([]);

onMount(() => {
	idStore.set(localStorage.length);
	datosStore.set(
		Object.keys(localStorage).map(
			key => JSON.parse(localStorage.getItem(key))
		)
	);
});

const infoStore = writable({});
const guardar = () => {
	idStore.update(id => id + 1);

	if((st && cs) !== undefined) {
		infoStore.set({
			id: $idStore,
			site: st,
			user: us,
			pass: cs
		});

		infoStore.subscribe((value) => {
			let key = `${$idStore}`;
			if (localStorage.getItem(key)) {
				const storedValue = JSON.parse(localStorage.getItem(key));
				if (JSON.stringify(value) !== JSON.stringify(storedValue)) {
				  key = Number(key) + 1;
				  $infoStore.id = key;
				}
	    	}
	    	localStorage.setItem(key, JSON.stringify(value));
	    	location.reload(true);
		});
	}else { alert('Introduzca el nombre y la contraseña que desea almacenar'); location.reload(true); }
};

const eliminar = () => {
	const content = event.target.closest('.blc-g').getAttribute('id');
	localStorage.removeItem(content);
	location.reload(true);
};

const idd = writable('0');
const usr = writable('');

export let st, us, cs;
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col items-center mt-4">
		<div class="xl:flex xl:items-center">
			<input id="sitio-web"  class="transition ease-in-out cursor-pointer p-2 border outline-none text-md bg-gray-800 hover:bg-gray-700 text-white font-heebo w-full sm:w-32" type="text" placeholder="Sitio web..." bind:value={st} required>
			<input id="usuario"  class="transition ease-in-out cursor-pointer p-2 border outline-none text-md bg-gray-800 hover:bg-gray-700 text-white font-heebo w-full sm:w-32" type="text" placeholder="Usuario..." bind:value={us} required>
			<input id="contrasena"  class="transition ease-in-out cursor-pointer p-2 border outline-none text-md bg-gray-800 hover:bg-gray-700 text-white font-heebo w-full sm:w-32" type="text" placeholder="Contrasena..." bind:value={cs} required>
		</div>
		<button on:click={guardar} class="font-workbench text-white bg-red-900 font-medium transition ease-in-out duration-300 p-2 border hover:bg-red-600 w-full">
			GENERAR
		</button>
	</div>
	<div id="bloco-contrasenas" class="w-96 h-64 overflow-hidden overflow-y-scroll bg-white mt-4 border border-1 shadow-md rounded text-left"
	>
	
	 {#if $idStore < 1}
	 	<p class="text-center font-workbench mt-24 text-2xl">NO HAY CONTRASEÑAS ALMACENADAS</p>
	 {:else}
		{#each $datosStore as dato}
		 	<div id={dato.id} class="flex items-center justify-between p-2 bg-gray-800 text-white font-heebo blc-g">
		 		<div class="text-leftflex flex-col items-center gap-2">
		 			<h3 class="font-medium text-gray-400">{dato.site}</h3>
		 			<div class="flex items-center gap-2">
		 				<span on:click={eliminar} class="text-sm cursor-pointer">Eliminar</span>
		    			<span on:click={() => {
		    				idd.set(dato.id);
		    				usr.set(dato.user);
		    			}} class="text-sm cursor-pointer" data-modal-target="crud-modal" data-modal-toggle="crud-modal">Cambiar</span>
		 			</div>
		    	</div>
		 		<div class="text-right">
		 			<p class="text-gray-400 font-medium">{(dato.user == undefined) ? "sin usuario infrormado":dato.user}</p>
		    		<p class="text-gray-400 font-medium">{dato.pass}</p>
		 		</div>
		 	</div>
	  	{/each}
	  	<Cambiar idItem={$idd} user={$usr}/>
	{/if}
	</div>
</div>