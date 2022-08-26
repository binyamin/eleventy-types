declare interface Events {
    /**
     *
     * @todo define {@link event} as literal union, or overload
     * the {@link Events.on} method so we can describe each
     * event separately.
     * @todo define params and returnType
     */
    on(
        event: string,
        callback: (...params: unknown[]) => unknown
    ): void,
}

export = Events;