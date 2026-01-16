import StatCard from "@/components/StatCard";
import { bookingRequests, messageThreads, vendorCategories, weddingEvents } from "@/lib/overview";

const roles = [
  {
    title: "Couple",
    description: "Plan ceremonies, track vendors, manage guests, and collect gifts in one dashboard.",
  },
  {
    title: "Vendor",
    description: "Showcase services, respond to booking requests, and manage client timelines.",
  },
  {
    title: "Guest",
    description: "View public wedding pages, RSVP, and send cash gifts with confidence.",
  },
  {
    title: "Admin",
    description: "Approve vendors, oversee payouts, and maintain platform compliance.",
  },
];

const features = [
  "Role-based authentication with Supabase",
  "Multi-event wedding timelines and RSVP management",
  "Vendor marketplace with curated categories",
  "Booking requests with status tracking",
  "In-app messaging for couples and vendors",
  "Cash gift registry using Paystack",
  "Admin approvals and reporting dashboards",
];

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <div className="brand">
            <div className="logo">RV</div>
            <div>
              <strong>Riva</strong>
              <div className="badge">MVP Dashboard</div>
            </div>
          </div>
          <nav className="nav">
            <span>Overview</span>
            <span>Events</span>
            <span>Vendors</span>
            <span>Messaging</span>
            <span>Admin</span>
          </nav>
        </header>

        <section className="hero">
          <div>
            <h1>Plan Nigerian weddings with clarity, trusted vendors, and secure gifting.</h1>
            <p>
              Riva centralizes ceremony planning, vendor collaboration, guest RSVPs, and cash gift
              management in a calm, role-based workspace built for Nigerian wedding teams.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#features">
                Explore MVP
              </a>
              <a className="button secondary" href="#dashboard">
                View Dashboard
              </a>
            </div>
          </div>
          <div className="grid two">
            <StatCard label="Active Events" value="3" helper="Traditional, white, reception" />
            <StatCard label="Vendor Requests" value="8" helper="2 new today" />
            <StatCard label="RSVPs" value="248" helper="70% confirmed" />
            <StatCard label="Gift Registry" value="₦4.2m" helper="Paystack ready" />
          </div>
        </section>

        <section className="section" id="features">
          <h2>MVP focus</h2>
          <p>Clean, extensible architecture that keeps the essentials reliable and visible.</p>
          <div className="grid three">
            {features.map((feature) => (
              <div key={feature} className="card">
                <h3>{feature}</h3>
                <span>Designed for fast iteration and clear ownership.</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="roles">
          <h2>Role-ready experiences</h2>
          <p>Personalized workspaces for every participant in the wedding journey.</p>
          <div className="grid two">
            {roles.map((role) => (
              <div key={role.title} className="card">
                <h3>{role.title}</h3>
                <span>{role.description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="dashboard">
          <h2>Dashboard-first planning</h2>
          <p>Monitor progress across events, vendors, and communication threads.</p>
          <div className="dashboard">
            <div className="panel">
              <h4>Upcoming events</h4>
              <div className="list">
                {weddingEvents.map((event) => (
                  <div key={event.id} className="list-item">
                    <div>
                      <strong>{event.title}</strong>
                      <div className="tag">{event.status}</div>
                    </div>
                    <span>
                      {event.date} · {event.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <h4>Vendor marketplace</h4>
              <div className="grid two">
                {vendorCategories.map((category) => (
                  <div key={category.id} className="card">
                    <h3>{category.name}</h3>
                    <span>{category.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Bookings & messaging</h2>
          <p>Track vendor responses and keep conversations centralized.</p>
          <div className="dashboard">
            <div className="panel">
              <h4>Booking requests</h4>
              <div className="list">
                {bookingRequests.map((request) => (
                  <div key={request.id} className="list-item">
                    <div>
                      <strong>{request.vendorName}</strong>
                      <div className="tag">{request.status}</div>
                    </div>
                    <span>
                      {request.category} · {request.budget}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel">
              <h4>Recent messages</h4>
              <div className="list">
                {messageThreads.map((thread) => (
                  <div key={thread.id} className="list-item">
                    <div>
                      <strong>{thread.participant}</strong>
                      <span>{thread.lastMessage}</span>
                    </div>
                    <span>{thread.updatedAt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Technical foundations</h2>
          <p>Built for reliability with clear integrations and scalable data models.</p>
          <div className="grid two">
            <div className="card">
              <h3>Backend & database</h3>
              <span>Supabase authentication, PostgreSQL schema, and row-level security.</span>
            </div>
            <div className="card">
              <h3>Payments & gifting</h3>
              <span>Paystack cash gift registry with webhook-led payout reconciliation.</span>
            </div>
            <div className="card">
              <h3>Architecture</h3>
              <span>Typed models, modular data stores, and API-first route planning.</span>
            </div>
            <div className="card">
              <h3>Admin controls</h3>
              <span>Vendor approval queue, fraud monitoring, and performance insights.</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Riva MVP · Nigerian wedding planning platform</span>
          <span>Primary: #1F3A4D · Secondary: #E7D8C9 · Accent: #C46A4A</span>
        </footer>
      </div>
    </main>
  );
}
