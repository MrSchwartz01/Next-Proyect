import Image from 'next/image'

// Ajusta los nombres y rutas según los archivos PNG que tengas en la carpeta
export function FilterIcon(props: React.ComponentProps<'img'>) {
  return (
    <Image
      src="/products/filter.png"
      alt="Filtrar"
      width={24}
      height={24}
      {...props}
    />
  )
}

export function GridIcon(props: React.ComponentProps<'img'>) {
  return (
    <Image
      src="/products/grid.png"
      alt="Grid"
      width={24}
      height={24}
      {...props}
    />
  )
}

export function ListIcon(props: React.ComponentProps<'img'>) {
  return (
    <Image
      src="/products/list.png"
      alt="Lista"
      width={24}
      height={24}
      {...props}
    />
  )
}