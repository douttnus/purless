<script>
import { onMount} from 'svelte'
import { writable } from 'svelte/store'

const ndtStore = writable({});
const dtStore = writable({});

onMount(() => {
	dtStore.set(
		Object.keys(localStorage).map(
			key => JSON.parse(localStorage.getItem(key))
		)
	);
});

const cambiar = () => {
    if((nst && ncs) !== undefined) {
        ndtStore.set({
            id: idItem,
            site: nst,
            user: user,
            pass: ncs
        });

        ndtStore.subscribe((value) => {
            localStorage.setItem(
                idItem, JSON.stringify(value)
            );
            location.reload(true);
        });
    }else { alert('Introduzca el nombre y la contraseña que desea cambiar'); }
};

let nst, ncs;
export let idItem;
export let user;
</script>

<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Añade nueva información
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Cerrar Pantalla</span>
                </button>
            </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5">
                <div class="grid gap-4 mb-4 grid-cols-2">
                    <div class="col-span-2 text-left">
                        <label for="sitio-web" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sitio Web</label>
                        <input type="text" id="nuevo-sitio-web" class="outline-none font-heebo cursor-pointer p-2 bg-gray-800 text-slate-300 w-full" placeholder="Nuevo sitio web..." bind:value={nst}>
                    </div>
                    <div class="col-span-2 text-left">
                        <label for="contrasena" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="text" id="nueva-contrasena" class="outline-none font-heebo cursor-pointer p-2 bg-gray-800 text-slate-300 w-full" placeholder="Nueva contraseña..." bind:value={ncs}>
                    </div>
                </div>
                <button on:click={cambiar} id="guardar-cambios" type="submit" class="transition ease-in-out font-workbench bg-red-800 hover:bg-red-700 border hover:text-slate-100 text-slate-300 p-2 w-full">
                    Guardar
                </button>
            </form>
        </div>
    </div>
</div> 
