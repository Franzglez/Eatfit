import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Breadcrumbs() {
  return (
    <>
      <Breadcrumb separator=''>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>PERDIDA DE PESO</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>PROTEÍNAS</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>BCAS</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>CARBOHIDRATOS</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>BARRITAS Y GELES</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>GLUTAMINA</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>MULTIVITAMÍNICOS</BreadcrumbLink>
        </BreadcrumbItem>

      </Breadcrumb>

    </>
  )
}
export default Breadcrumbs