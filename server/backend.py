from model import session, Post, Author, Tag, populate


def get_posts():
    populate()
    return session.query(Post).all()
