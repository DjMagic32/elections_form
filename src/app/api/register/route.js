import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mails';
import axios from 'axios'; 

export const POST = async (req) => {
  try {
    console.log("REQUEST!! ", req.body);

    let passedValue = await new Response(req.body).text();
    let valueToJson = JSON.parse(passedValue);
    console.log(valueToJson);
    const {
      fullName,
      birthDate,
      state,
      email,
      phone,
      candidate,
      topics,
      suggestions,
      adminRating,
      electionEmotion,
    } = valueToJson;

    // Array para almacenar los temas verdaderos
    const trueTopics = [];

    const emotions = [
      "Anxious",    // Ansioso
      "Disappointed", // Decepcionado
      "Scared",     // Asustado
      "Worried",    // Preocupado
      "Frustrated", // Frustrado
      "Uncertain",  // Incierto
      "Concerned",  // Preocupado
      "Nervous",    // Nervioso
      "Hopeful",    // Esperanzado
      "Excited"     // Emocionado
    ];
    
    const emotionsRating = [
      "Disappointed",   
      "Unsatisfied",    
      "Neutral",        
      "Content",        
      "Satisfied",      
      "Happy",          
      "Delighted"       
    ];    

    // Iterar sobre el objeto topics y agregar los temas verdaderos al array
    for (const topic in topics) {
      if (topics[topic]) {
        trueTopics.push(topic);
      }
    }

    // Construir la cadena para mostrar los temas verdaderos
    const topicsString = trueTopics.join(", ");

    const template = `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"/><!--<![endif]-->
    <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        @media (max-width:620px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="10" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <h1 style="margin: 0; color: #ff4747; direction: ltr; font-family: 'Lato', Tahoma, Verdana, Segoe, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 45.6px;">Survey results</h1>
    </td>
    </tr>
    </table><!--[if mso]><style>#list-r0c0m1 ul{ margin: 0 !important; padding: 0 !important; } #list-r0c0m1 ul li{ mso-special-format: bullet; }#list-r0c0m1 .levelOne li { margin-top: 0 !important; } #list-r0c0m1 .levelOne { margin-left: -20px !important; }#list-r0c0m1 .levelTwo li { margin-top: 0 !important; } #list-r0c0m1 .levelTwo { margin-left: 10px !important; }#list-r0c0m1 .levelThree li { margin-top: 0 !important; } #list-r0c0m1 .levelThree { margin-left: 40px !important; }#list-r0c0m1 .levelFour li { margin-top: 0 !important; } #list-r0c0m1 .levelFour { margin-left: 70px !important; }#list-r0c0m1 .levelFive li { margin-top: 0 !important; } #list-r0c0m1 .levelFive { margin-left: 100px !important; }#list-r0c0m1 .levelSix li { margin-top: 0 !important; } #list-r0c0m1 .levelSix { margin-left: 130px !important; }#list-r0c0m1 .levelSeven li { margin-top: 0 !important; } #list-r0c0m1 .levelSeven { margin-left: 160px !important; }#list-r0c0m1 .levelEight li { margin-top: 0 !important; } #list-r0c0m1 .levelEight { margin-left: 190px !important; }#list-r0c0m1 .levelNine li { margin-top: 0 !important; } #list-r0c0m1 .levelNine { margin-left: 220px !important; }#list-r0c0m1 .levelTen li { margin-top: 0 !important; } #list-r0c0m1 .levelTen { margin-left: 250px !important; }</style><![endif]-->
    <table border="0" cellpadding="10" cellspacing="0" class="list_block block-2" id="list-r0c0m1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div class="levelOne" style="margin-left: 0;">
    <ul class="leftList" start="1" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; font-weight: 400; text-align: left; color: #101112; direction: ltr; font-family: Lato,Tahoma,Verdana,Segoe,sans-serif; font-size: 16px; letter-spacing: 0; line-height: 120%; mso-line-height-alt: 19.2px; list-style-type: disc;">
    <li style="margin-bottom: 10px; text-align: left;">Name: ${fullName}</li>
    <li style="margin-bottom: 10px; text-align: left;">Birth Date: ${birthDate}</li>
    <li style="margin-bottom: 10px; text-align: left;">State: ${state}</li>
    <li style="margin-bottom: 10px; text-align: left;">Email: ${email}</li>
    <li style="margin-bottom: 10px; text-align: left;">Phone: ${phone}</li>
    <li style="margin-bottom: 10px; text-align: left;">Candidate: ${candidate}</li>
    <li style="margin-bottom: 10px; text-align: left;">Topics: ${topicsString}</li>
    <li style="margin-bottom: 10px; text-align: left;">Suggestions: ${suggestions}</li>
    <li style="margin-bottom: 10px; text-align: left;">Opinion on current administration: ${emotionsRating[adminRating]} ${adminRating}</li>
    <li style="margin-bottom: 10px; text-align: left;">Emotion regarding current elections: ${emotions[electionEmotion]} ${electionEmotion}</li>
    </ul>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px; margin: 0 auto;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"></td>
    <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"></td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`;

    await sendMail({
      to: email,
      name: "<NAME>",
      subject: "Survey information",
      body: template,
    });

    return NextResponse.json({
      message: "Cliente registrado con éxito!",
      status: "success",
    });
  } catch (error) {
    console.error('Error', error.message);
    return new NextResponse(500, { error: 'Error en el servidor' });
  }
};

