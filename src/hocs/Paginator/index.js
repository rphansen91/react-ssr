import React, { Component } from 'react';
import cx from 'classnames';

const Link = ({ active, onClick, children }) => (
    <li className={cx("page-item", { active })} onClick={onClick}>
        <span className="page-link">{children}</span>
    </li>
)

export default (Cmp) => class extends Component {
    range = 3
    state = {
        limit: 6,
        page: 0,
        order: "DESC",
    }

    onPrev () {
        const page = Math.max(0, this.state.page - 1);
        this.setState({ page });
    }

    prev () {
        const { page } = this.state;
        if (!page) return null;
        return (
            <Link
                key="prev"
                onClick={() => this.onPrev()}
            >
                &laquo;
            </Link>
        );
    }

    onNext () {
        const page = this.state.page + 1;
        this.setState({ page });
    }

    next () {
        return (
            <Link
                key="next"
                onClick={() => this.onNext()}
            >
                &raquo;
            </Link>
        );
    }

    visiblePages () {
        const { page } = this.state;
        const negRange = Array(this.range + 1).fill(0).map((_, i) => page-i).slice(1).reverse()
        const posRange = Array(this.range + 1).fill(0).map((_, i) => page+i).slice(1)
        return [...negRange, page, ...posRange]
        .filter(p => p >= 0);
    }

    visibleLinks () {
        return this.visiblePages().map(page => (
            <Link
                key={page}
                active={page === this.state.page}
                onClick={() => this.setState({ page })}
            >
                {page + 1}
            </Link>
        ));
    }

    paginator () {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {this.prev()}
                    {this.visibleLinks()}
                    {this.next()}
                </ul>
            </nav>
        )
    }

    render () {
        return <Cmp 
            {...this.state}
            paginator={this.paginator()} />
    }
}