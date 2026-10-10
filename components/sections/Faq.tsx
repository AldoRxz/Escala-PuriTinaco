import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded'
import WhatsApp from '@mui/icons-material/WhatsApp'
import Section, { SectionHeader } from '@/components/ui/Section'
import { site, whatsappUrl } from '@/lib/site'

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: '¿Reduce la presión de agua que sube al tinaco?',
    a: (
      <>
        La presión de tu casa no cambia: en regaderas y llaves depende de la altura del tinaco, y el filtro va antes, en la
        tubería de subida. Lo que sí puede cambiar es la velocidad de llenado. Con el cartucho limpio casi no se nota; si el
        tinaco empieza a tardar más en llenarse, es la señal de que toca lavar o cambiar el cartucho.
      </>
    ),
  },
  {
    q: '¿Cada cuánto se cambia el cartucho?',
    a: (
      <>
        Depende de qué tan sucia llegue el agua y de cuántas personas viven en casa. Como referencia, el cartucho lavable del
        Kit Básico se enjuaga cada 1 a 3 meses y se reemplaza una vez al año. En el Kit Dual Pro, el cartucho de 5 micras se
        cambia cada 3 a 6 meses y el bloque de carbón cada 6 meses. Haz tu estimación en el{' '}
        <Link href="#calculador">calculador de filtro</Link>.
      </>
    ),
  },
  {
    q: '¿Es difícil de instalar con un plomero o DIY?',
    a: (
      <>
        Es una instalación sencilla: se corta la tubería de subida, se colocan las conexiones con cinta teflón y se fija la
        carcasa con su soporte. Un plomero suele terminar en menos de una hora. Si tienes experiencia con herramienta básica
        puedes hacerlo tú, y por WhatsApp te guiamos paso a paso. En {site.installCity.name},{' '}
        <Link href="#instalacion">nosotros lo instalamos</Link>.
      </>
    ),
  },
  {
    q: `¿Hacen la instalación en ${site.installCity.name}?`,
    a: (
      <>
        Sí. En {site.installCity.name} vamos a tu domicilio, conectamos el filtro en tu tubería de subida y te explicamos el
        mantenimiento. Agenda por WhatsApp y te cotizamos según tu instalación. En el resto del país te lo enviamos y te
        guiamos para que lo instale tu plomero.
      </>
    ),
  },
  {
    q: '¿Funciona también con cisterna?',
    a: (
      <>
        Sí. Se instala en la entrada de la cisterna o entre la bomba y el tinaco. Si tienes las dos, conviene filtrar a la
        entrada de la cisterna: así se mantienen limpias ambas.
      </>
    ),
  },
  {
    q: '¿El agua queda lista para beber?',
    a: (
      <>
        No. PuriTinaco retiene sedimentos y el Kit Dual Pro reduce cloro, olor y sabor, pero no elimina bacterias ni
        minerales disueltos. Para beber y cocinar usa agua purificada o un purificador en tu cocina.
      </>
    ),
  },
]

export default function Faq() {
  return (
    <Section id="faq" tone="paper">
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 104 } }}>
            <SectionHeader
              sectionId="faq"
              title="Preguntas frecuentes"
              subtitle="Lo que más nos preguntan antes de instalar su filtro."
            />
            <Box sx={{ mt: { xs: -2, md: -3 } }}>
              <Typography sx={{ fontWeight: 500 }}>¿Tienes otra duda?</Typography>
              <Button
                href={whatsappUrl('Hola, tengo una duda sobre los filtros PuriTinaco.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                startIcon={<WhatsApp />}
                sx={{ mt: 1.5 }}
              >
                Escríbenos por WhatsApp
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          {faqs.map((item, i) => (
            <Accordion key={item.q} defaultExpanded={i === 0}>
              <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls={`faq-${i}-contenido`}
                id={`faq-${i}-pregunta`}
              >
                <Typography component="span" sx={{ fontWeight: 600, fontSize: { xs: '1rem', md: '1.0625rem' } }}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: 'text.secondary' }}>{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Section>
  )
}
