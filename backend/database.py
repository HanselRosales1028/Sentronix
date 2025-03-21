# database.py
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

# Reemplaza "username", "password", "localhost", "5432" y "database_name" por tus datos reales
DATABASE_URL = "postgresql+asyncpg://postgres:admin@localhost:5432/sentronix_db"

engine = create_async_engine(DATABASE_URL, echo=True)

async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
