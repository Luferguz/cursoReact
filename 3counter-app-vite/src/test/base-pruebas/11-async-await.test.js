
import { getImagen } from "../../base-pruebas/11-async-await";
describe('11-async-await', () => {

    test('La imagen debe retornar el URL de la misma.', async() => { 

        const url = await getImagen();
        console.log(url);
    })
}) 



