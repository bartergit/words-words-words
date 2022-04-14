from msilib import Table

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship, backref

Base = declarative_base()
engine = create_engine("sqlite:///:memory:")


class Author(Base):
    __tablename__ = 'Author'
    id = Column(Integer, primary_key=True)
    nickname = Column(String, nullable=False, unique=True)

    def __repr__(self):
        return self.nickname


class TagList(Base):
    __tablename__ = 'TagList'
    left_id = Column(Integer, ForeignKey('Post.id'), primary_key=True)
    right_id = Column(Integer, ForeignKey('Tag.id'), primary_key=True)


class Post(Base):
    __tablename__ = 'Post'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    text = Column(String, nullable=False)
    img_url = Column(String, nullable=False)

    author_id = Column(Integer, ForeignKey(Author.id), nullable=False)
    author = relationship('Author')
    tags = relationship("Tag", secondary='TagList')

    def __repr__(self):
        return f"""{self.name}
{self.author}: {self.tags}
![{self.img_url}]
{self.text}...
"""


class Tag(Base):
    __tablename__ = 'Tag'
    id = Column(Integer, primary_key=True)
    tag_name = Column(String, nullable=False)

    def __repr__(self):
        return f"#{self.tag_name}"


Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()


#
#
def add_post(name: str, text: str, img_url: str, author: Author, tags=None):
    post = Post(
        name=name,
        text=text,
        img_url=img_url,
        author=author,
        tags=[Tag(tag_name=x) for x in tags] if tags else []
    )
    session.add(post)
    return post


def populate():
    me = Author(nickname="Barter")
    not_me = Author(nickname="Философия тони")
    session.add(me)
    add_post(
        "Goodbye, Eri - Tatsuki",
        "Фуджимото люто угорел по мета-историям и разрушению конвенциональной структуры сюжета. Главная проблема - сам ф",
        "https://sun9-66.userapi.com/impg/GrlqjaV7Ih6SPuJCEYGbBN8ZmknrFLpTxzhZTg/g8h3xLsS6GY.jpg?size=1095x1600&quality=96&sign=01b0adbd11eefa62fa4659a4f0283b55&type=album",
        me,
        ["manga", "good", "ru"]
    )
    add_post(
        "Морбиус",
        """#сходилвкино
я терпел 15 минут рекламы, чтобы потом потерпеть еще полтора часа Морбиуса
----------------------------------
Фильм, который пытался быть пустоватым, но всё же терпимым и цельным блокбастером сродни “Веному”, превратился в блеклую тень самого с""",
        "https://sun9-61.userapi.com/impg/VP4VRxVgxE926dlnm-VL9xJg20AoiKRjIBYa4A/W2dvDzHGql8.jpg?size=640x427&quality=96&sign=c00c54f00229194da2d3616d7e5efb76&type=album",
        me,
        ["movie", "georgian", "bad"]
    )
    add_post("Мадс Миккельсен", """"Мадс Миккельсен не одобрил всеобщий хайп вокруг индидента с Крисом Роком и Уиллом Смитом на «Оскаре»
Поинтересоваться по поводу произошедшего у актёра решил датский журналист из SoundVenue. Мадс ответил следующее:
"Я не ебу кто это и мне вообще похуй".""",
             "https://sun9-87.userapi.com/impf/d4Phc6vThdBFEvfnD0iiOHsrxe7xafxm8-LM5g/Tl2f78i-GXo.jpg?size=610x407&quality=95&sign=17a00bfb9e6601af8528254500772e30&type=album",
             not_me, ["movie", "fuckingё cool", "badass", "eng"])
