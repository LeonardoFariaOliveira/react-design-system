import {clsx} from 'clsx'
import {Slot} from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TextInputRootProps{
    children: ReactNode
}

export function TextInputRoot(props:TextInputRootProps){

    return(
        <div className='py-4 px-3 flex items-center gap-3 bg-gray-800 rounded   w-full hover:bg-cyan-600  outline-none transition-colors focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )

}

export function TextInputIcon(){}

export function TextInputInput(props:TextInputInputProps){

    return(
        <>
            <div className='bg-transparent flex-1 text-xs placeholder:text-gray-400 font-semibold text-gray-100 '>
                <input {...props}/>
            </div>   
        </>
    )

}

export const TextInput = {

    Root: TextInputRoot,
    Input: TextInputInput

}