import React from 'react';
import ServiceDetailContent from '@/components/ServiceDetailContent';

interface ServiceDetailPageProps {
  params: {
    serviceId: string;
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { serviceId } = await params;
  return <ServiceDetailContent serviceId={serviceId} />;
}

export async function generateStaticParams() {
  return [
    { serviceId: 'personal' },
    { serviceId: 'residential' },
    { serviceId: 'corporate' },
    { serviceId: 'events' },
    { serviceId: 'mobile' },
    { serviceId: 'surveillance' },
  ];
}