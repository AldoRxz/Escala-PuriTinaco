import Grid from '@mui/material/Grid'
import CompatibilityTool from '@/components/tools/CompatibilityTool'
import FilterCalculator from '@/components/tools/FilterCalculator'
import Section, { SectionHeader } from '@/components/ui/Section'

export default function KitFinder() {
  return (
    <Section id="encuentra-tu-kit" tone="paper">
      <SectionHeader
        sectionId="encuentra-tu-kit"
        title="Encuentra el kit para tu casa"
        subtitle="Responde un par de preguntas y te decimos qué sistema instalar y cada cuánto darle mantenimiento."
      />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <CompatibilityTool />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <FilterCalculator />
        </Grid>
      </Grid>
    </Section>
  )
}
