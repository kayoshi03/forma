"use client"
import { ModalStore } from "@/store/zustand/modal"
import { createPortal } from "react-dom"
import { Modal } from "./Modal"
import { useEffect } from "react"

export const ModalRoot = () => {
    const {stack} = ModalStore()

    useEffect(() => {

    }, [stack.length])

    return (
    stack.length !== 0 ? createPortal(
        <div>
            {
                stack.map(({key, Component}) => {
                    
                    return (
                        <Modal key={key} title={key}>
                            {
                                Component
                            }
                        </Modal>
                    )
                })
            }
        </div>, document.body
    ) : <></>
)}