const btnEnviar = $("#btnEnviar")
const thanxContact = $("#thanxContact")

const nombre = $("#full-name")
const mail = $("#email")
const subject = $("#subject")
const mensaje = $("#mensaje")


btnEnviar.on("click" , (event) => {
    event.preventDefault();

    thanxContact.text(`Thanks, your message was send. I'll contact you soon`)

    nombre.val("");
    mail.val("");
    subject.val("");
    mensaje.val("");
})

