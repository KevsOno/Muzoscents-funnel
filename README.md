# Kevs Digital BI – Full-Stack Lead Management & Operations Intelligence Platform

### 🚀 Quick Access Links
* **📺 Video Demo:** [Watch the 3-Minute Loom Walkthrough](http://www.videoloom.com)
* **🌐 Live Production Deployment:** [Interactive Dashboard Frontend](https://mzfunnel.netlify.app/bizintel)
* ### 🔐 Quick Onboarding (No Signup Required)
To evaluate the live dashboard environment with pre-loaded sample datasets, you can either:
1. **Instant Entry:** Click the **"One-Click Demo Access"** button directly on the live login landing page to automatically authenticate via our backend API token vault.
2. **Manual Entry:** Use the credentials below if you prefer standard manual authentication processing:
   * **Username / Email:** `demo@kevsdigital.com`
   * **Password:** `KevsDemo2026!`

### 🔐 Demo Sandbox Credentials
To evaluate the live system without creating a new organization, use the following pre-loaded sandbox account:
* **Username / Email:** `demo@kevsdigital.com`
* **Password:** `KevsDemo2026!`

---

[![System Walkthrough](https://img.shields.io/badge/Loom-Video_Walkthrough-blueviolet?style=for-the-badge&logo=loom)](http://www.videoloom.com)
[![Live Demo](https://img.shields.io/badge/Netlify-Live_Production_Demo-success?style=for-the-badge&logo=netlify)](https://mzfunnel.netlify.app/)

An enterprise-grade, single-instance business systems engineering platform designed to optimize customer acquisition pipelines, calculate unit economics in real time, and automate data-driven operational decision-making[cite: 3]. 

This platform bridges the gap between digital marketing spend and corporate financial accounting by consolidating a multi-tenant CRM, predictive financial forecasting models, an automated e-commerce inventory layer, and a context-aware AI strategic advisory engine driven by semantic vector search[cite: 1, 3].
# Kevs Digital BI – Full-Stack Lead Management & Operations Intelligence Platform

An enterprise-grade, single-instance business systems engineering platform designed to optimize customer acquisition pipelines, calculate unit economics in real time, and automate data-driven operational decision-making[cite: 3].

This platform bridges the gap between digital marketing spend and corporate financial accounting by consolidating a multi-tenant CRM, predictive financial forecasting models, an automated e-commerce inventory layer, and a context-aware AI strategic advisory engine driven by semantic vector search[cite: 1, 3].

---

## 🌐 The Connected Ecosystem (Beyond the Dashboard)

While this repository contains the **Internal Business Intelligence & CRM UI Dashboard** (`bizintel (2).html`)[cite: 1], it acts as the administrative window of a comprehensive, dual-facing enterprise ecosystem powered by a single, unified database architecture[cite: 1, 3]. The system runs two parallel streams across the exact same database engine to eliminate operational silos[cite: 3]:

### 1. The Internal-Facing Cockpit (This Dashboard)

* **Target Audience:** Internal Stakeholders, Growth Strategists, and In-House Marketers[cite: 3].
* **Core Functions:** Handled by `bizintel (2).html`, this module acts as the administrative terminal where staff members bulk-upload raw lead datasets via CSV, audit running customer acquisition costs (Actual CAC), visualize projected growth curves, and query marketing databases through isolated strategic business lenses[cite: 1, 3].

### 2. The External-Facing Production Layer (Background Infrastructure)

The true operational scope of this architecture runs autonomously behind the scenes, using the exact same relational schema to drive customer-facing assets[cite: 3]:

* **Automated Customer Support Bot:** Features dedicated loops tracking active user messaging sequences (`chat_sessions`), calculating immediate user frustration margins (`sentiment_score`), and parsing intent categories (`intent`) directly out of Web or WhatsApp chat nodes[cite: 3].
* **Intelligent Vector Knowledge Retrieval:** Pulls contextually accurate documentation using high-dimensional data column definitions (`embedding`) to map matching customer queries without manual support agent typing[cite: 3].
* **Autonomous Escalation Desk:** Monitors customer-agent dialogue thresholds, automatically routing tasks to live support queues (`human_handoffs`) when complex requests occur[cite: 3].
* **Transactional E-Commerce & Loyalty Engine:** Tracks warehouse inventory item counts (`inventory`) paired with external processing keys (`paystack_product_id`) to automatically award user tiers and operational perks (`profiles`) upon payment confirmation[cite: 3].

---

## 🏗️ System Architecture & Data Flow

```
┌────────────────────────────────────────────────────────┐
│               FRONTEND APPLICATION LAYER               │
│   (bizintel.html / bisignin.html via Tailwind & JS)    │
└───────────────────────────┬────────────────────────────┘
                            │ Auth Token / API Payloads
                            ▼
┌────────────────────────────────────────────────────────┐
│                 BACKEND SERVICE LAYER                  │
│       (FastAPI Microservice on Hugging Face)           │
└───────────────────────────┬────────────────────────────┘
                            │ SQL Queries / Vector Search
                            ▼
┌────────────────────────────────────────────────────────┐
│                DATA INFRASTRUCTURE LAYER               │
│          (Supabase / PostgreSQL + pgvector)            │
└────────────────────────────────────────────────────────┘

```

* **Frontend Application:** A responsive single-page visual command center constructed with semantic HTML5, utility-first **Tailwind CSS**, and dynamic async JavaScript[cite: 1, 2]. Data rendering is animated using **Chart.js**[cite: 1].
* **Backend API Engine:** Hosted as an independent computational microservice on **Hugging Face Spaces** (`[https://kevsono-kevs-digital-business-intelligencev2.hf.space](https://kevsono-kevs-digital-business-intelligencev2.hf.space)`), built using **FastAPI** to handle routing, schema validation, and secure authentication[cite: 1, 2, 3].
* **Database Infrastructure:** A relational, cloud-hosted **Supabase (PostgreSQL)** database running advanced schema rules, automated task scheduling (`pg_cron`), stored procedures (`RPC`), database views, and vector embedding calculation models (`pgvector`)[cite: 3].

---

## ⚡ Core Operational Modules

### 📋 1. Predictive CRM & Lead Management

* **Deterministic Financial Tracking:** Tracks explicit customer properties including structural acquisition spend (`ad_spend`) and actualized customer revenue (`deal_value`) per lead entry[cite: 1].
* **Data Ingestion Automation:** Eliminates manual administrative bottlenecks via standardized multi-row bulk CSV importing mechanisms[cite: 1].
* **State Machines:** Transitions lead objects smoothly across distinct transactional states (`cold` $\rightarrow$ `warm` $\rightarrow$ `converted`) with corresponding time-stamped logging flags[cite: 1].

### 📊 2. Algorithmic Unit Economics Dashboard

The metrics engine queries the `org_leads` table to dynamically process core business performance indicators without manual spreadsheet overhead[cite: 1]:

* **Conversion Tracking:** Calculates organizational conversion efficiency across all logged records[cite: 1]:

$$\text{Conversion Rate} = \left( \frac{\sum \text{Leads where Status} = \text{'converted'}}{\text{Total Leads}} \right) \times 100$$


* **Customer Acquisition Cost (CAC):** Isolates strict operational efficiency per converted record[cite: 1]:

$$\text{Actual CAC} = \frac{\sum \text{Ad Spend}}{\sum \text{Leads where Status} = \text{'converted'}}$$


* **Return on Investment (ROI):** Measures capital productivity across deployed ad channels[cite: 1]:

$$\text{ROI (\%)} = \left( \frac{\sum \text{Deal Value} - \sum \text{Ad Spend}}{\sum \text{Ad Spend}} \right) \times 100$$


* **Pipeline Valuation:** Aggregates potential future earnings by compiling `deal_value` for all active unclosed opportunities (`cold` and `warm` states)[cite: 1].

### 🤖 3. Strategic AI Consulting Framework

The AI terminal implements direct user interface guardrails to restrict conversational drift[cite: 1]:

* **Strategic Lens Forcing:** Users can bind the conversational model to explicitly process historical records through 4 distinct corporate management pillars[cite: 1]:
1. **Customer Intelligence:** Customer journeys, behavior tracking, and retention mechanics[cite: 1, 3].
2. **Market & Competitive:** Positioning models, SWOT, VRIO, and TAM-SAM-SOM validation ceilings[cite: 1, 3].
3. **Operations & Capabilities:** Standard operating procedures, resource friction, and internal limits[cite: 1, 3].
4. **Growth Economics:** Target budget forecasting, acquisition floors, and lifetime value scaling[cite: 1, 3].


* **Hybrid RAG Storage:** Conversational sequences are matched against semantic information clusters (`general_knowledge`, `support_faqs`) using cosine similarity calculations across user embedding inputs[cite: 3].

### 🎯 4. Financial Scenario Optimizer (CAC Planner)

A backward-engineered financial planning sandbox[cite: 1]. Users input fixed parameters to evaluate target viability[cite: 1]:

* **Budget Constrained View:** Evaluates exact conversion yields accessible under explicit cost parameters given targeted cost-per-acquisition metrics[cite: 1].
* **Revenue Constrained View:** Isolates the volume of net-new top-of-funnel leads that must be pushed into the pipeline to safely offset acquisition churn and reach gross revenue milestones[cite: 1].

### 📈 5. Exponential Time-Series Forecaster

An analytical modeling tool that projects forward organizational expansion across dynamic time horizons[cite: 1]:

* Integrates baseline parameters, targeted monthly growth targets, and supplementary marketing allocations[cite: 1].
* Generates interactive linear tracking visuals via Chart.js along with complete structured ledger listings depicting step-by-step compound lead volume, monthly target conversions, and cumulative capital generation[cite: 1].

---

## 🗄️ Database Schema Blueprint (Supabase/PostgreSQL)

The underlying architecture relies on a highly decoupled relational database model running inside a unified Supabase space[cite: 3].

### Core Architecture & User Profiles

#### `organisations`

Stores parent organizational metadata defining structural parameters[cite: 1, 3].

```sql
CREATE TABLE organisations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_name TEXT NOT NULL,
    location TEXT,
    niche TEXT,
    budget INTEGER,
    created_by UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

#### `bi_user_profiles`

Extended structural metrics mapped directly to authentication records[cite: 1, 3].

```sql
CREATE TABLE bi_user_profiles (
    user_id TEXT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone TEXT,
    location TEXT,
    niche TEXT,
    budget INTEGER,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

### Lead Management (CRM Engine)

#### `org_leads`

The master record hub processing tracking indicators for individual customer instances[cite: 1, 3].

```sql
CREATE TABLE org_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID REFERENCES organisations(id),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    source TEXT,
    status TEXT DEFAULT 'cold' CHECK (status IN ('cold', 'warm', 'converted')),
    deal_value NUMERIC,
    ad_spend NUMERIC,
    acquired_date DATE DEFAULT CURRENT_DATE,
    conversion_date DATE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

### Strategy & LLM History Tracking

#### `chat_history`

Logs state context constraints for conversational retrieval modules[cite: 1, 3].

```sql
CREATE TABLE chat_history (
    id BIGSERIAL PRIMARY KEY,
    org_id UUID,
    user_id TEXT,
    query TEXT,
    response TEXT,
    model TEXT,
    pillar INTEGER CHECK (pillar IN (1, 2, 3, 4)),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

### Customer Service & Handoff Infrastructure

#### `support_tickets`

Tracks structural service lifecycles across external channel connections[cite: 3].

```sql
CREATE TABLE support_tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id VARCHAR NOT NULL,
    session_id VARCHAR,
    channel VARCHAR,
    subject TEXT,
    status VARCHAR DEFAULT 'open',
    priority VARCHAR DEFAULT 'normal',
    sentiment_score DOUBLE PRECISION,
    resolution_notes TEXT,
    resolved_at TIMESTAMP WITHOUT TIME ZONE,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

```

#### `human_handoffs`

Manages failover handoff signaling when semantic automation loops identify critical frustration triggers or complex tasks[cite: 3].

```sql
CREATE TABLE human_handoffs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID,
    user_id VARCHAR NOT NULL,
    agent_id UUID,
    reason TEXT,
    status VARCHAR DEFAULT 'pending',
    requested_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    accepted_at TIMESTAMP WITHOUT TIME ZONE,
    completed_at TIMESTAMP WITHOUT TIME ZONE
);

```

### Inventory & Loyalty Reward System

#### `inventory`

Provides direct visual links to payment fulfillment checkouts[cite: 3].

```sql
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    item_code TEXT UNIQUE,
    product_group TEXT,
    description TEXT,
    price_naira NUMERIC,
    current_qty INTEGER DEFAULT 0,
    paystack_product_id TEXT
);

```

#### `profiles` (Loyalty Ledger Program)

Powers the client-facing *Penafort Value Rewards* engine, recalculating active user perk allocations[cite: 3].

```sql
CREATE TABLE profiles (
    membership_id TEXT PRIMARY KEY,
    id UUID,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    loyalty_program TEXT DEFAULT 'Penafort Value Rewards',
    tier TEXT DEFAULT 'One',
    status TEXT DEFAULT 'Active',
    current_points NUMERIC DEFAULT 0,
    available_points NUMERIC DEFAULT 0,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

---

## 💻 Backend Implementation Snippets

To ensure full transparency into the decoupled backend engine running on Hugging Face Spaces, key Python FastAPI computation routing configurations are detailed below:

### 1. Unified Marketing Metrics Computation Loop (`/leads/metrics`)

```python
@app.get("/leads/metrics")
async def get_metrics(current_user: User = Depends(get_current_user)):
    # Fetch all leads belonging to the user's organization from Supabase
    leads = supabase.table("org_leads").select("*").eq("org_id", current_user.org_id).execute()
    
    total_leads = len(leads.data)
    converted_leads = [l for l in leads.data if l["status"] == "converted"]
    conversion_count = len(converted_leads)
    
    # Calculate Unit Economics deterministically
    total_spend = sum([float(l["ad_spend"] or 0) for l in leads.data])
    total_revenue = sum([float(l["deal_value"] or 0) for l in converted_leads])
    active_pipeline = sum([float(l["deal_value"] or 0) for l in leads.data if l["status"] != "converted"])
    
    conversion_rate = round((conversion_count / total_leads * 100), 2) if total_leads > 0 else 0
    actual_cac = round((total_spend / conversion_count), 2) if conversion_count > 0 else 0
    roi = round(((total_revenue - total_spend) / total_spend * 100), 2) if total_spend > 0 else 0
    
    return {
        "metrics": {
            "total_leads": total_leads,
            "conversion_rate": conversion_rate,
            "actual_cac": actual_cac,
            "roi": roi,
            "pipeline_value": active_pipeline,
            "data_quality": "High" if total_leads > 0 else "No Data"
        }
    }

```

### 2. Autonomous Vector Search FAQ Matcher (PostgreSQL RPC Stored Procedure)

```sql
CREATE OR REPLACE FUNCTION match_support_faqs (
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id INT,
  question TEXT,
  answer TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    support_faqs.id,
    support_faqs.question,
    support_faqs.answer,
    1 - (support_faqs.embedding <=> query_embedding) AS similarity
  FROM support_faqs
  WHERE 1 - (support_faqs.embedding <=> query_embedding) > match_threshold
  ORDER BY support_faqs.embedding <=> query_embedding ASC
  LIMIT match_count;
END;
$$;

```

---

## 🚀 Installation & Deployment

### 1. Database Setup (Supabase)

Initialize your schema by executing the code blocks provided in the Database Schema Blueprint inside your Supabase SQL Editor[cite: 3]. To enable vector search components, ensure the extension is explicitly activated at the top of your script[cite: 3]:

```sql
CREATE EXTENSION IF NOT EXISTS vector;

```

### 2. Backend Environment Variables

Configure a `.env` file for the microservice running on Hugging Face Spaces[cite: 1, 3]:

```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_secure_service_role_secret
OPENAI_API_KEY=your_llm_generation_key
JWT_SECRET=your_custom_session_signing_string

```

### 3. Frontend Integration

Ensure your static setup references the target deployment URL configuration[cite: 1]:

```javascript
const BACKEND_URL = 'https://kevsono-kevs-digital-business-intelligencev2.hf.space';

```

---

## 🔒 Engineering & Governance Philosophy

1. **Deterministic Calculations Only:** Financial totals, cost calculations, and budget allocations are computed purely using secure database layers and mathematical scripts[cite: 3]. Large Language Models are never trusted with arithmetic operations or database updates[cite: 3].
2. **Explainable AI Routing:** Every query processed through the conversational model requires structural verification tags[cite: 1, 3]. If the context cannot be securely matched inside the local vector space, the connection defaults to a human handoff routine[cite: 3].
3. **Clean Decoupling:** The UI is completely lightweight, handling layout rendering and using standard data fetching methods to communicate with the database[cite: 1]. This keeps operation execution incredibly fast, safe, and cheap to maintain[cite: 1, 3].
