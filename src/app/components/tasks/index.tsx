import * as Checkbox from '@radix-ui/react-checkbox';
import './styles.scss';
import { CheckIcon } from '@/assets/checkIcon';
import { TrashIcon } from '@/assets/trash';

export function Tasks() {
    return (
        <form className='formContainer'>
            <h1 className='tasksTitle'>Suas tarefas de hoje</h1>

            <div className='taskContainer'>
                <div className='checkboxContainer'>
                    <Checkbox.Root className='root' id="c1">
                        <Checkbox.Indicator className='indicator'>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className='label' htmlFor="c1">
                        Lavar as mãos.
                    </label>
                </div>

                <button type='button' className='deleteBtn'>
                    <TrashIcon />
                </button>
            </div>

            <div className='taskContainer'>
                <div className='checkboxContainer'>
                    <Checkbox.Root className='root' id="c1">
                        <Checkbox.Indicator className='indicator'>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className='label' htmlFor="c1">
                        Limpar quarto.
                    </label>
                </div>

                <button type='button' className='deleteBtn'>
                    <TrashIcon />
                </button>
            </div>

            <h2 className='tasksTitle'>Tarefas finalizadas</h2>

            <div className='taskContainer'>
                <div className='checkboxContainer'>
                    <Checkbox.Root className='root' id="c1">
                        <Checkbox.Indicator className='indicator'>
                            <CheckIcon />
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className='label' htmlFor="c1">
                        Lavar lixo para fora.
                    </label>
                </div>

                <button type='button' className='deleteBtn'>
                    <TrashIcon />
                </button>
            </div>

            <button className='addTaskBtn'>Adicionar nova tarefa</button>

        </form>
    )
}