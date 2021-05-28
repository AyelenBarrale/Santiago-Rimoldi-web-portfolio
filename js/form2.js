const btnEnviar2 = $("#btnEnviar2")
const thanxContact2 = $("#thanxContact2")

const nombre2 = $("#full-name2")
const mail2 = $("#email2")
const subject2 = $("#subject2")
const mensaje2 = $("#mensaje2")


btnEnviar2.on("click" , (event) => {
    event.preventDefault();

    thanxContact2.text(`Thanks, your message was send. I'll contact you soon`)

    nombre2.val("");
    mail2.val("");
    subject2.val("");
    mensaje2.val("");
})