import React from 'react'

const Nosotros = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-10 md:px-40'>
        <div>
          <h2 className='text-center uppercase md:text-4xl pt-28'>N o s o t r o s</h2>
          <p className='text-center pt-10 pb-10'>Los CINDEA, Son centros dirigidos a personas jóvenes y adultas, que no han terminado la primaria o secundaria o bien que desean alguna formación técnica para incorporarse al mundo del trabajo. Podés tener opciones de educación presencial en ramas académica, técnica o artística. En los CINDEA la asistencia para los estudiantes es obligatoria, por ser una modalidad educativa formal</p>
        </div>
        <div className='py-5'>
          <p className='font-bold  underline'>Requisitos</p>
          <ul style={{ listStyle: 'decimal' }} >
            <li>Debés tener más de15 años de edad.</li>
            <li>No haber terminado primaria o secundaria.</li>
            <li>Querer una oferta educativa formal o técnica.</li>
            <li>Presentar los siguientes documentos: 
              <p>- Original y una copia de la Tarjeta de Identidad de Menores TIM o cédula de identidad, en caso de ser mayor de edad.</p>
              <p>- Certificado de notas del último año aprobado. Debés solicitarlo en el centro educativo donde realizaste los últimos estudios.</p>
            </li>
          </ul>
        </div>
        <div className='py-5'>
          <p className='font-bold underline'>Buscá los lugares que ofrecen el programa CINDEA</p>
          <ul style={{ listStyle: 'disc' }} >
            <li>Dirigite a la Dirección Regional de Educación correspondiente.</li>
            <li>Si vivís en San José podés ir al Departamento de Educación para Personas Jóvenes y Adultas, ubicado en el 4°piso del edificio Raventós.</li>
            <li>Solicitá la lista de CINDEA correspondiente a tu región.</li>
            <li>Seleccioná el CINDEA que más te convenga.</li>
            <li>Consultá el periodo y horario de matrícula.</li>
          </ul>
        </div>
        <div className='py-5'>
          <p className='font-bold underline'>Realizá la matrícula</p>
          <ul style={{ listStyle: 'disc' }} >
            <li>Dirigite al CINDEA seleccionado para realizar la matrícula.</li>
            <li>Si sos menor de edad, debés ir acompañado (a) de tu padre, madre o encargado (a).</li>
            <li>Completá el formulario de matrícula.</li>
            <li>Entregá el formulario una vez completado y los documentos que preparaste.</li>
            <li>Solicitá el comprobante de matrícula.</li>
            <li>Consultá cuando inician las clases.</li>
            <li>Solicitá la lista de materiales y los libros que necesitarás.</li>
          </ul>
        </div>
        <div className='pt-5'>
          <p className='font-bold underline'>Preparate  para continuar tus estudios</p>
          <ul style={{ listStyle: 'disc' }} >
            <li>Tené pendiente la fecha y horario de inicio de las clases.</li>
            <li>Llevá el comprobante de matrícula el primer día de clases.</li>
            <li>Alistá los materiales que te solicitaron.</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center p-20
      '>
        <img src="https://www.mep.go.cr/sites/default/files/page/img-yma.png" alt="logo_yo_me_apunto" />
      </div>
    </div>
  )
}

export default Nosotros