"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useState } from "react";  
import { Form, FormControl, FormField, FormItem, FormMessage } from "../Ui/form";
import { Input } from "../Ui/input";
import { Textarea } from "../Ui/textarea";
import { Button } from "../Ui/button";

const ContactForm = () => {
    const [successForm, setSuccessForm] = useState(false)

    const formSchema = z.object({
        firstName: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })
 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        if (response.status === 200) {
            setSuccessForm(true)
        }
    }

    const handleSendAnotherMessage = () => {
        setSuccessForm(false);
        form.reset();
    };

    return (
        <Form {...form}>
            {successForm ? (
               <div className="space-y-4">
               <h4>Mensaje enviado con éxito</h4>
               <Button onClick={handleSendAnotherMessage}>¿Quieres enviar otro mensaje?</Button>
           </div>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Tu nombre"
                                        {...field}
                                        className="bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Tu email"
                                        {...field}
                                        className="bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Escribe tu mensaje..."
                                        {...field}
                                        className="bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Enviar</Button>
                </form>
            )}
        </Form>
    );
}

export default ContactForm;