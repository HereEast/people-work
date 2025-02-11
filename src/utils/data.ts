export interface Backlog {
  lastUpdate: string;
  items: BacklogItem[];
}

export interface BacklogItem {
  title: string;
  done: boolean;
}

export const BACKLOG: Backlog = {
  lastUpdate: "Feb 11",
  items: [
    {
      title:
        "Render answers with rich text and cool custom elements (Contact Max)",
      done: false,
    },
    {
      title: "Redesign Person page (make it more useful and readable)",
      done: false,
    },
    {
      title: "Decide on the font",
      done: false,
    },
    {
      title:
        "Add subscriptions. How to work with subscr. + Add in the UI + Design email patterns",
      done: false,
    },
    {
      title: "Design cool loaders. Skeletons?",
      done: false,
    },
    {
      title: "Animate the Rat",
      done: true,
    },
    {
      title:
        "Finish (aka start and finish) working on branding + Create basic UI kit",
      done: false,
    },
    {
      title: "Create business email",
      done: false,
    },
    {
      title: "Create a single question page + Upd Sitemap",
      done: false,
    },
    {
      title: "Improve Person page render speed (!!!)",
      done: true,
    },
    {
      title: "Move backlog to a separate page + Upd Sitemap",
      done: true,
    },
    {
      title: "Create About page + Upd Sitemap",
      done: false,
    },
    {
      title:
        "Write a web app to draw and animate silly pixel icons/illustrations",
      done: false,
    },
    {
      title: "Add analytics + Cookie banner",
      done: true,
    },
    {
      title: "Launch whatever is ready.",
      done: true,
    },
    {
      title: "Add 404 page.",
      done: true,
    },
    {
      title: "Write a list of professions I want to get covered.",
      done: true,
    },
  ],
};
