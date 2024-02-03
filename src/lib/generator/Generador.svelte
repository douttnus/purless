<script>
import { writable } from "svelte/store"

const contrasena = writable('seleccione la contraseña de su elección');
const contrasenaStore = writable([]);
const aviso = writable("Genere su contrasenas");

const generar = () => {
	let opccion = document.querySelector('#opcciones').value;
	if (opccion === "numerico" && (longitud >= 4  && longitud <= 14)) {
		for(let i = 0; i < longitud; i++) {
			contrasenaStore.update((numeros) => {
				numeros.push(Math.floor(Math.random() * 9));
				return numeros;
			});
		}
		contrasena.set($contrasenaStore.join(''));
		contrasenaStore.set([]);
	}else if(longitud >= 4 && longitud <= 14){
		const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$@!_):,(%&0123456789";
		const letras = Array.from(abecedario).slice(0, longitud).map(() => {
			contrasenaStore.update((senha) => {
				senha.push(abecedario.charAt(
					Math.floor(Math.random() * abecedario.length)
				))
				return senha;
			});
		});
		contrasena.set($contrasenaStore.join(''));
		contrasenaStore.set([]);
	}else { contrasena.set('La longitud mínima debe ser de 4 caracteres y la máxima de 14'); }
};

let longitud;
</script>

<div class="mt-6 w-80 m-auto">
	<div class="w-full flex gap-2 items-center mb-2">
		<select class="cursor-pointer bg-gray-800 text-slate-300 focus-ring-none" id="opcciones">
			<option value="dinamico" id="ty-dinamico">Dinámico</option>
			<option value="numerico" id="ty-numerico">Numérico</option>
		</select>
		<input class="cursor-pointer p-2 bg-gray-800 text-slate-300 w-20 text-center focus-ring-none" type="number" bind:value={longitud}/>
	</div>
	<div id="cs" class="p-2 w-full border bg-gray-800 font-workbench text-slate-500 text-sm select-all cursor-pointer">
		{$contrasena}
	</div>
	<button on:click={generar} class="transition ease-in-out duration-300 font-workbench bg-red-900 hover:bg-red-600 hover:text-slate-100 text-slate-300 p-2 w-full">GENERAR</button>
</div>

<style>
	#opcciones { width: 247.10px; }
	input[type=number] { 
	   -moz-appearance: textfield;
	   appearance: textfield;
	}

	input,select { border: none; outline: none; focus: none; }
</style>
