import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-paths',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './learning-paths.html',
  styleUrl: './learning-paths.css',
})
export class LearningPaths {
  selectedRoleTrack = 'All Tracks';

  roleFilters = ['All Tracks', 'Frontend & Full-Stack', 'AI & Data Engineering', 'Cloud & Security', 'Product & Design'];

  paths = [
    {
      id: 'enterprise-fullstack-architect',
      title: 'Enterprise Full-Stack Architect (Angular + .NET)',
      category: 'Frontend & Full-Stack',
      duration: '16 Weeks',
      coursesCount: 6,
      projectsCount: 8,
      learners: '18.4k',
      level: 'Beginner to Advanced',
      icon: 'bi-layers-fill',
      summary:
        'Go from core TypeScript and C# fundamentals to architecting distributed micro-frontends, clean architecture APIs, and cloud deployments.',
      steps: [
        'TypeScript & Reactive Programming Foundations',
        'Modern Angular 19, Signals & Enterprise UI Systems',
        '.NET 9 Web APIs, EF Core & Clean Architecture',
        'Microservices, RabbitMQ & Docker Containerization',
      ],
      skills: ['Angular 19', '.NET 9', 'RxJS & Signals', 'PostgreSQL', 'Docker', 'Microservices'],
    },
    {
      id: 'ai-llm-engineer-track',
      title: 'Applied AI & LLM Systems Engineer',
      category: 'AI & Data Engineering',
      duration: '14 Weeks',
      coursesCount: 5,
      projectsCount: 7,
      learners: '24.1k',
      level: 'Intermediate',
      icon: 'bi-cpu-fill',
      summary:
        'Build production-grade RAG pipelines, multi-agent workflows, vector search engines, and fine-tuned domain models.',
      steps: [
        'Python for Data Science & Neural Network Essentials',
        'Transformer Architectures & Prompt Engineering',
        'Vector Databases, Embeddings & Hybrid RAG Systems',
        'Autonomous AI Agents, LangGraph & Production Eval',
      ],
      skills: ['Python', 'LangChain', 'RAG', 'Vector DBs', 'FastAPI', 'LLM Ops'],
    },
    {
      id: 'cloud-devops-sre-track',
      title: 'Cloud-Native DevOps & Site Reliability Engineer',
      category: 'Cloud & Security',
      duration: '12 Weeks',
      coursesCount: 5,
      projectsCount: 6,
      learners: '12.9k',
      level: 'Intermediate to Advanced',
      icon: 'bi-cloud-check-fill',
      summary:
        'Master multi-cloud infrastructure as code, Kubernetes cluster administration, observability stacks, and zero-downtime CI/CD.',
      steps: [
        'Linux Systems, Networking & Container Internals',
        'Infrastructure as Code with Terraform & AWS',
        'Kubernetes (EKS), Helm & GitOps with ArgoCD',
        'Observability with Prometheus, Grafana & OpenTelemetry',
      ],
      skills: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Prometheus'],
    },
    {
      id: 'product-design-systems-track',
      title: 'Principal UI/UX & Design Systems Lead',
      category: 'Product & Design',
      duration: '10 Weeks',
      coursesCount: 4,
      projectsCount: 5,
      learners: '9.8k',
      level: 'All Levels',
      icon: 'bi-bezier2',
      summary:
        'Bridge the gap between product design and frontend engineering with tokenized Figma libraries, WCAG accessibility, and user research.',
      steps: [
        'User Research, Wireframing & Information Architecture',
        'Figma Variables, Auto-Layout & Multi-Brand Tokens',
        'WCAG 2.2 Accessibility & Interactive Prototyping',
        'Design-to-Code Handoff & Storybook Documentation',
      ],
      skills: ['Figma', 'Design Tokens', 'Accessibility', 'Prototyping', 'Design Systems'],
    },
  ];

  get filteredPaths() {
    if (this.selectedRoleTrack === 'All Tracks') {
      return this.paths;
    }
    return this.paths.filter((p) => p.category === this.selectedRoleTrack);
  }
}
