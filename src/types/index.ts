
export interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export interface ProjectItem {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  placeholderImagen?: string;
  categoria: string;
}

export interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
} 