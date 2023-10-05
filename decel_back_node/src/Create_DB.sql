CREATE TABLE IF NOT EXISTS decel_card (
    card_id INTEGER PRIMARY KEY AUTOINCREMENT,
    card_name VARCHAR(20) NOT NULL,
    cart_uart_tty_path VARCHAR(20) NOT NULL,
    card_config JSON
)
