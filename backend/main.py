# main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from database import async_session, engine
from models import Base, ScheduleModel, ContactModel

app = FastAPI()

# Permitir peticiones desde cualquier origen usando regex
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=".*",  # Permite peticiones de cualquier origen
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crear las tablas automáticamente al iniciar la aplicación
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

# Dependency: sesión de la base de datos
async def get_db() -> AsyncSession:
    async with async_session() as session:
        yield session

# Modelos Pydantic para la validación de entrada
class Schedule(BaseModel):
    date: str
    time: str

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# Endpoint para agendamiento
@app.post("/api/schedule")
async def schedule_meeting(schedule: Schedule, db: AsyncSession = Depends(get_db)):
    new_schedule = ScheduleModel(date=schedule.date, time=schedule.time)
    db.add(new_schedule)
    await db.commit()
    await db.refresh(new_schedule)
    return {"message": "Reserva recibida", "data": {"date": new_schedule.date, "time": new_schedule.time}}

# Endpoint para contacto
@app.post("/api/contact")
async def contact_message(contact: ContactMessage, db: AsyncSession = Depends(get_db)):
    new_contact = ContactModel(name=contact.name, email=contact.email, message=contact.message)
    db.add(new_contact)
    await db.commit()
    await db.refresh(new_contact)
    return {
        "message": "Mensaje recibido. Nos pondremos en contacto pronto.",
        "data": {"name": new_contact.name, "email": new_contact.email, "message": new_contact.message}
    }
