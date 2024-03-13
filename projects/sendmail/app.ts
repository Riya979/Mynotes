let nodemailer=require('nodemailer')
//ccatvgnhjxsbxyof
let middleMan=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'priyankajspriyankajs08@gmail.com',
            pass:'mwvzkocpooqriwsx'
        },
        tls:{
            rejectUnauthorized:false
        }
    }
)

let mailOptions={
    from:'priyankajspriyankajs08@gmail.com',
    to:'sahana2272001@gmail.com',
    subject:'hlo',
    text:'der?'
}

middleMan.sendMail(mailOptions,(error:any,res:any)=>{
    if(error){
        console.log(error)
    }else{
        console.log("mail sent")
    }
})