export interface Helpers {
    // Note - `addPlugin` cannot use our own `Plugin` type,
    // since that would only cover plugins which used our
    // particular config typedefs
    /**
     *
     * @category plugins
     * @since v0.2.13
     * @docs https://www.11ty.dev/docs/plugins/
     */
    addPlugin<P extends (config: any, options: NonNullable<any>) => void>(
        /**
         *
         * Plugin function. Often the default export of the module.
         */
        plugin: P,
        options?: Parameters<P>['1']
    ): void;
    addPlugin(plugin: (...args: any[]) => void): void;
}

export { default as Options } from './options';
